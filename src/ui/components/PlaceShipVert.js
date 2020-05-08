import React from 'react'
import './PlaceShipVert.css'

function PlaceShipVert(props) {

    const {type} = props;

    return (
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
    )
}

export default PlaceShipVert