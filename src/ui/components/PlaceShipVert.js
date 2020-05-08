import React from 'react'
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
        }

    submitClick() {
        this.setState(state => ({
            // what to do?
        }))
    }
   

    return() {
        <form className="PlaceShipVert">
            <label >
                row start
                <input type="text" name="row-start"/>
            </label>
            <label >
                row end
                <input type="text" name="row-start"/>
            </label>
            <label >
                col
                <input type="text" name="row-start"/>
            </label>
            <button onClick={() => this.submitClick()} className="button"> Submit</button>
        </form>
    }
}

export default PlaceShipVert