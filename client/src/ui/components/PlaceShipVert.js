import React from 'react'
import {PlaceShipVertRPC} from '../../service/EchoService'
import './PlaceShipVert.css'

class PlaceShipVert extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            row: 0,
            row_start: 0,
            row_end: 0,
            col: 0,
            col_start: 0,
            col_end: 0
          };

          this.submitClick = this.submitClick.bind(this)
          this.UpdateRowStart = this.UpdateRowStart.bind(this)
          this.UpdateRowEnd = this.UpdateRowEnd.bind(this)
          this.UpdateCol = this.UpdateCol.bind(this)
        }

    submitClick() {
        const {row_start, row_end, col} = this.state
       PlaceShipVertRPC(row_start, row_end, col)
    }

    UpdateRowStart(event) {
        event.persist()
        console.log(event)
        this.setState(state => ({
            row_start: event.target.value
        }))
    }

    UpdateRowEnd(event) {
        event.persist()
        this.setState(state => ({
            row_end: event.target.value
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
        <form className="PlaceShipVert">
            <label >
                row start
                <input onChange={this.UpdateRowStart} type="text" name="row-start"/>
            </label>
            <label >
                row end
                <input onChange={this.UpdateRowEnd} type="text" name="row-start"/>
            </label>
            <label >
                col
                <input onChange={this.UpdateCol} type="text" name="row-start"/>
            </label>
            <button onClick={() => this.submitClick()} className="button"> Submit</button>
        </form>
        )
    }
}

export default PlaceShipVert