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
            <div>
                <CreateGame  {...this.props} />
                <JoinGame {...this.props}/>
            </div>
        )   
    }
}

export default InitPage
