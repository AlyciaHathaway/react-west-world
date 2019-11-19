import React from 'react'
import ReactDOM from 'react-dom'
import { Chessboard } from './chessboard'
import { Add } from './add'

ReactDOM.render(
    <div>
        <Chessboard />
        <Add />
    </div>,
    document.getElementById('root')
)
