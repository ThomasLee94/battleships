import React from 'react'
import './Cell.css'

function Cell(props) {
  const { type, style } = props
    
  return (
    <div className="Cell" style={style}>
      {type}
    </div>
  )
  
}

export default Cell