import React from 'react'
import './PlaceShipVert.css'

class PlaceShipVert extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            row: 1,
            row_start: 1,
            row_end: 1,
            col: 2,
            col_start: 2,
            col_end:2
          }
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
            {/* <button onClick={activateLasers}> Activate Lasers</button> */}
            <button className="button"> Submit</button>
        </form>
    }
}

export default PlaceShipVert