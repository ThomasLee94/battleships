import React from 'react'
import './Cell.css'

class Cell extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        row: 0,
        col: 0
    }
    this.submitClick = this.submitClick.bind(this)
    this.UpdateRow = this.UpdateRow.bind(this)
    this.UpdateCol = this.UpdateCol.bind(this)
  }

  submitClick() {
    const {x, y} = this.props
    this.props.fireMissile(x, y)
    
    console.log("Clicked")
  }

  UpdateRow(event) {
      event.persist()
      console.log(event)
      this.setState(state => ({
          row: event.target.value
      }))
  }

  UpdateCol(event) {
      event.persist()
      this.setState(state => ({
          col: event.target.value
      }))
  }

    render() {
      
      return (
        <div className="Cell" style={this.props.style} onClick={this.submitClick.bind(this)}>
          {this.props.type}
        </div>
      )
    }
}

export default Cell