import React from 'react'
import ReactDOM from 'react-dom'
import {Chessboard} from './chessboard'
import {Add} from './add'
import {Race} from './race'
import ReduxDemo from './redux'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const stateChanger = (state, action) => {
  if (typeof state === 'undefined') {
    return {n: 0}
  } else {
    if (action.type === 'add') {
      return {n: state.n + action.payload}
    } else {
      return {n: state.n}
    }
  }
}

const store = createStore(stateChanger)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Chessboard/>
      <Add/>
      <Race/>
      <ReduxDemo/>
    </div>
  </Provider>,
  document.getElementById('root')
)


