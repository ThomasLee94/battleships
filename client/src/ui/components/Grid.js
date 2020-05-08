import React from 'react'
import Cell from './Cell'
import './Grid.css'

function Grid(props) {
  const { cells } = props

  const array = cells.map((cell) => <Cell type={cell.type} />)

  return (
    <div className="Grid">
      {array}
    </div>
  )
}

export default Grid