import React, { Component } from 'react';

import Grid from './ui/components/Grid';
import FireMissile from './ui/components/FireMissile'
import InitPage from './ui/components/InitPage'

import { BoardServiceClient } from 'generated/src/services_grpc_web_pb';

import {
  PollGameRequest,
} from "generated/src/services_pb"

class Square {
  squares = 0;
  constructor(type) {
    Square.squares += 1;
    this.key = Square.squares
    this.type = type
  }
}

class App extends Component {
  constructor() {
    super()


    this.state = {
      gameID: "",
      player: "",
      otherPlayer: "",
      isWon: false,
      grids: []
    }

    this.startGame = this.startGame.bind(this)
    this.client = new BoardServiceClient('http://localhost:8080', null, null);

  }

  startGame(gameID, player) {
    this.setState({
      gameID,
      player,
    })
    console.log(this.state.player)
    setInterval(this.PollGameRPC.bind(this), 3000)
  }

  joinGame(gameID, player) {
    this.startGame(gameID, player);
    this.PollGameRPC();
  }

  PollGameRPC() {
    const request = new PollGameRequest();
    request.setGameid(this.state.gameID);
  
    const call = this.client.pollGame(request, {'custom-header-1': 'value1'},
    (err, response) => {
      if(err) {
        console.log(err)
      }
      // console.log(response.getPlayersList());
      let otherPlayer;
      let players = response.getPlayersList();
      for (let idx in players) {
        if (players[idx] !== this.state.player) {
          otherPlayer = players[idx];
        }
      }
      console.log(otherPlayer);
      this.setState({
        otherPlayer,
        isWon: response.getIswon(),
      })


    });
    call.on('status', (status) => {
      console.log(status)
    // ...
    });
  }

  RenderGrids

  render() {
    if (this.state.gameID.length > 1) {
      return(
        <div className="App">
            <h2>col:row</h2>
            <FireMissile />
            {/* passing client down to components in props */}
            {this.state.gameID}
            {this.state.player && <Grid {...this.state} client={this.client} owner={this.state.player}></Grid>}
            {this.state.otherPlayer && <Grid {...this.state} client={this.client} owner={this.state.otherPlayer}></Grid>}
        </div>
      );
    } else {
      return (
        <div className="App">
          <InitPage startGame={this.startGame} joinGame={this.joinGame.bind(this)} client={this.client} />
        </div>
      );

    }
    
  }
}

export default App;