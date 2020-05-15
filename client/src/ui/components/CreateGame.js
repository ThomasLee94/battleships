import React from 'react'
import {BattleShipService} from '../../service'
import './CreateGame.css'

class CreateGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }

          this.submitClick = this.submitClick.bind(this)
          this.UpdateName = this.UpdateName.bind(this)
        }

    submitClick() {
        BattleShipService.CreateGameRPC(this.state.name, this.props.startGame)
        console.log("Clicked")
    }

    UpdateName(event) {
        event.persist()
        console.log(event)
        this.setState(state => ({
            name: event.target.value
        }))
    }

    render() {
        return (
        <div className="CreateGame">
            <label >
                Your name 
                <input onChange={this.UpdateRowStart} type="text" />
            </label>
            <button onClick={this.submitClick} className="button"> Create Game Room</button>
        </div>
        )
    }
}

export default CreateGame
