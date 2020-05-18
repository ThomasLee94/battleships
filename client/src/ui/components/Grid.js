import React from 'react'
import Cell from './Cell'
import './Grid.css'

import {
  ShowPlacedShipsRequest, FireMissileRequest
} from "generated/src/services_pb"

class Grid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        cells: [],
    }
    this.ShowBoardRPC()
    this.FireMissileRPC = this.FireMissileRPC.bind(this) 
    setInterval(this.ShowBoardRPC.bind(this), 2000)
    }

    ShowBoardRPC() {

      if (this.props.owner === "") {
          return;  
      }

      const request = new ShowPlacedShipsRequest();

      request.setGameid(this.props.gameID)
      console.log(this.props.gameID);
      request.setTargetuser(this.props.owner)
      request.setCurrentuser(this.props.player)
    
      const call = this.props.client.showPlacedShips(request, {'custom-header-1': 'value1'},
    (err, response) => {
      if(err) {
        console.log(err)
      }

      // console.log("COORDINATES", response.getGridList())

      // for object in coordinates
      let boardLength = response.getGridList().length;
      let rowArray = response.getGridList();
      let cellArray = []

      for (let i = 0; i < boardLength; i++) {
        let row = rowArray[i];
        console.log(row.getColList());
        cellArray.push(row.getColList());
      }

      this.setState({

        cells: cellArray.map(row => {
          let cellRow = [];
          const isOwner = this.props.owner === this.props.player;
          let counter = 0
          for (let col in row) {
            let style = {};
            console.log(isOwner)
            if (row[col] === -1) {
              style = {backgroundColor: "red", color: ""}
            } else if (row[col] === 1) {
              style = {backgroundColor: "blue", color: "blue !important"}
            } else {
              style = {backgroundColor: "white"}
            }
              cellRow.push(<Cell x={counter} y={col} fireMissile={this.FireMissileRPC.bind(this)} type={row[col]} style={{...style}} />)
              counter += 1
          }
          return cellRow;
        })
      })
    });
    call.on('status', (status) => {
    // ...
    });
    }

    FireMissileRPC() {

      const request = new FireMissileRequest();

      request.setGameid(this.props.gameID)
      console.log(this.props.gameID);
      request.setTargetuser(this.props.owner)
      request.setCurrentuser(this.props.player)
      request.setX(this.props.x)
      request.setY(this.props.y)
    
      const call = this.props.client.fireMissile(request, {'custom-header-1': 'value1'},
    (err, response) => {
      if(err) {
        console.log(err)
      }
    
    });
    call.on('status', (status) => {
      console.log("STATUS FOR FIRE MISSILE RPC ---------------", status)
    });
    }

    render() {
      
      if (this.props.owner === "") {
        return (<></>)
      }
      
      
      return (
        <div className="Grid">
          {this.state.cells}
        </div>
      )
    }
}

export default Grid