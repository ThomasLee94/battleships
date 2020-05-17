import React from 'react'
import Cell from './Cell'
import './Grid.css'

import {
  ShowPlacedShipsRequest
} from "generated/src/services_pb"

class Grid extends React.Component {

  constructor(props) {
    super(props);

    const { cells } = props
    this.state = {
        array: cells.map((cell) => <Cell type={cell.type} />)
    }
    this.ShowBoardRPC(props.name)
    }

    ShowBoardRPC(targetUser) {
      const request = new ShowPlacedShipsRequest();

      request.setGameid(this.props.gameID)
      console.log(this.props.gameID)
      request.setTargetuser(targetUser)
      request.setCurrentuser(this.props.name)
    
      const call = this.props.client.showPlacedShips(request, {'custom-header-1': 'value1'},
    (err, response) => {
      if(err) {
        console.log(err)
      }

      // console.log("COORDINATES", response.getGridList())

      // for object in coordinates
      let coordinatesLength = response.getGridList().length;
      let arr = response.getGridList()
      for (let i = 0; i < 5; i++) {
        console.log( arr[i])
      }
    });
    call.on('status', (status) => {
    // ...
    });
      
      console.log('yeet in show board rpc')
      return 
    }

    render() {
      return (
        <div className="Grid">
          {this.state.array}
        </div>
      )
    }
}

export default Grid