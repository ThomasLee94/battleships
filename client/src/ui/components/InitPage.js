import React from 'react'
import JoinGame from './JoinGame'
import './InitPage.css'

import {
    CreateGameRequest, CreateGameResponse,
    AddPlayerRequest, AddPlayerResponse, 
  } from "generated/src/services_pb"
  

class InitPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            gameID: ""
        }

          this.submitClick = this.submitClick.bind(this)
          this.UpdateName = this.UpdateName.bind(this)
        }

    CreateGameRPC(callback) {
        const request = new CreateGameRequest();
        request.setName(this.state.name);
        
        const call = this.props.client.createGame(request, {'custom-header-1': 'value1'},
        (err, response) => {
            if(err) {
            console.log(err)
            }
            return this.AddPlayerRPC(response.getGameid(), this.state.name, callback)
        
        });
        call.on('status', (status) => {
        });
    }

    AddPlayerRPC(gameID, name, callback) {
        const request = new AddPlayerRequest();
        request.setGameid(gameID);
        request.setName(name);
      
        const call = this.props.client.addPlayer(request, {'custom-header-1': 'value1'},
        (err, response) => {
          if(err) {
            console.log(err)
          }
          console.log(response.getMessage());
          console.log(name);
          return callback(gameID, name)
        });
        call.on('status', (status) => {
          console.log(status)
        // ...
        });
      }
    
    submitClick() {
        this.CreateGameRPC(this.props.startGame)
        console.log("Clicked")
    }

    UpdateName(event) {
        event.persist()
        console.log(event)
        this.setState(state => ({
            name: event.target.value
        }))
    }

    UpdateGameId(event) {
        event.persist()
        console.log(event)
        this.setState(state => ({
            gameID: event.target.value
        }))
    }
    submitJoinGame() {
        const {gameID} = this.state
        this.AddPlayerRPC(this.state.name, gameID, this.props.joinGame)
        console.log("Clicked")
    }

    render() {
        return (
            <div className="InitPage">
                <h2>Welcome to Battleships!</h2>
                <h4>Either create a new game, or submit the Game ID to join a friends game!</h4>
                {/* CREATE GAME */}
                <div className="CreateGame">
                    <label className="label">
                        Your name    
                        <input className="input" onChange={this.UpdateName} type="text" />
                    </label>
                    <button onClick={this.submitClick} className="button"> Create Game Room</button>
                </div>
            
                <div className="CreateGame">
                    <label className="label">
                        Game ID
                        <input className="input" onChange={this.UpdateGameId.bind(this)} type="text" />
                    </label>
                    <button onClick={this.submitJoinGame.bind(this)} className="button"> Submit</button>
                </div>
            </div>
        )   
    }
}

export default InitPage
