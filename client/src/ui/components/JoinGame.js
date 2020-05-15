import React from 'react'
import {BattleShipService} from '../../service'
import './CreateGame.css'

class JoinGame extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            gameID: ""
          };

          this.submitClick = this.submitClick.bind(this)
          this.UpdateGameId = this.UpdateGameId.bind(this)
        }

    submitClick() {
        const {gameID} = this.state
        BattleShipService.AddPlayerRPC(gameID)
        console.log("Clicked")
    }

    UpdateGameId(event) {
        event.persist()
        console.log(event)
        this.setState(state => ({
            gameID: event.target.value
        }))
    }

    render() {
        return (
        <div className="CreateGame">
            <label >
                GameId
                <input onChange={this.UpdateGameId} type="text" />
            </label>
            <button onClick={this.submitClick} className="button"> Submit</button>
        </div>
        )
    }
}

export default JoinGame
