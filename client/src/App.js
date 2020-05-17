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
    const cells = []

    for (let i = 0; i < 10; i += 1) {
      let row = i+1
      for (let j = 0; j < 10; j += 1) {
        let col = j+1
        const type = col + ":" + row
        const square = new Square(type)
        cells.push(square)
      }
    }

    this.state = {
      cells,
      gameID: "",
      name: ""
    }

    this.startGame = this.startGame.bind(this)
    this.client = new BoardServiceClient('http://localhost:8080', null, null);

  }


  startGame(gameId, name) {
    this.setState({
      gameID: gameId,
      name: name
    })

    setInterval(this.PollGameRPC.bind(this), 10000)
  }

  PollGameRPC() {
    const request = new PollGameRequest();
    request.setGameid(this.state.gameID);
  
    const call = this.client.pollGame(request, {'custom-header-1': 'value1'},
    (err, response) => {
      if(err) {
        console.log(err)
      }
      console.log(response.getPlayersList());
    
    });
    call.on('status', (status) => {
      console.log(status)
    // ...
    });
  }

  render() {
    if (this.state.gameID.length > 1) {
      return(
        <div className="App">
            <h2>col:row</h2>
            <FireMissile />
            {/* passing client down to components in props */}
            <Grid {...this.state} client={this.client} />
            <Grid {...this.state} client={this.client} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <InitPage startGame={this.startGame} client={this.client} />
        </div>
      );

    }
    
  }
}

export default App;