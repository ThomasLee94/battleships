import React, { Component } from 'react';
import Grid from './ui/components/Grid';
import PlaceShipVert from './ui/components/PlaceShipVert'
import './App.css';

import { echoServiceEndpointRPC } from './service/EchoService.js';

// let output = echoServiceEndpointRPC().then(()=>{}).catch(()=>{})

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
      cells
    }
  }

  render() {
    return (
      <div className="App">
        <h2>col:row</h2>
        <PlaceShipVert />
        <Grid cells={this.state.cells} />
      </div>
    );
  }
}

export default App;