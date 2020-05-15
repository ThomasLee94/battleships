import React from 'react'
import CreateGame from './CreateGame'
import JoinGame from './JoinGame'
import './InitPage.css'

class InitPage extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <div className="InitPage">
                <h2>Welcome to Battleships!</h2>
                <h4>Either create a new game, or submit the Game ID to join a friends game!</h4>
                <CreateGame  {...this.props} />
                <JoinGame {...this.props}/>
            </div>
        )   
    }
}

export default InitPage
