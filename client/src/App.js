import React, { Component } from 'react';

import Grid from './ui/components/Grid';
import FireMissile from './ui/components/FireMissile'
import InitPage from './ui/components/InitPage'

import './App.css';

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
  }

  startGame(name, gameId) {
    this.setState({
      gameID: gameId,
      name: name
    })
  }

  render() {
    if (this.state.gameID) {
      return(
        <div className="App">
            <h2>col:row</h2>
            <FireMissile />
            <Grid cells={this.state.cells} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <InitPage startGame={this.startGame} />
        </div>
      );

    }
    
  }
}

export default App;