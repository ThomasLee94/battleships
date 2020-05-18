import React from 'react'
import {BattleShipService} from '../../service'
import './FireMissile.css'

class FireMissile extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            row: 0,
            col: 0
          };

          this.submitClick = this.submitClick.bind(this)
          this.UpdateRow = this.UpdateRow.bind(this)
          this.UpdateCol = this.UpdateCol.bind(this)
        }

    submitClick() {
        const {row, col} = this.state
        BattleShipService.FireMissileRPC(row, col)
        // clear state
        console.log("Clicked")
    }

    UpdateRow(event) {
        event.persist()
        console.log(event)
        this.setState(state => ({
            row: event.target.value
        }))
    }

   
    UpdateCol(event) {
        event.persist()
        this.setState(state => ({
            col: event.target.value
        }))
    }

    render() {
        return (
        <div className="FireMissile">
            <label >
                row 
                <input onChange={this.UpdateRowStart} type="text" name="row-start"/>
            </label>
            <label >
                col
                <input onChange={this.UpdateCol} type="text" name="row-start"/>
            </label>
            <button onClick={this.submitClick} className="button"> Submit</button>
        </div>
        )
    }
}

export default FireMissile