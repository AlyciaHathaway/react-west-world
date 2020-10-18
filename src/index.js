import React from 'react'
import ReactDOM from 'react-dom'
import {Chessboard} from './chessboard'
import {Add} from './add'
import {Race} from './race'

ReactDOM.render(
  <div>
    <Chessboard/>
    <Add/>
    <Race/>
  </div>,
  document.getElementById('root')
)
