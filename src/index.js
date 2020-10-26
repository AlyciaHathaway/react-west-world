import React from 'react'
import ReactDOM from 'react-dom'
import {Chessboard} from './chessboard'
import {Add} from './add'
import {Race} from './race'
import ReduxDemo from './redux'
import {createStore} from 'redux'

const stateChanger = (state, action) => {
  if (typeof state === 'undefined') {
    return 0
  } else {
    if (action.type === 'add') {
      return state + action.payload
    } else {
      return state
    }
  }
}

const store = createStore(stateChanger)
render()
store.subscribe(() => {
  render()
})

function onAddOdd() {
  if (store.getState() % 2 === 1) {
    store.dispatch({type: 'add', payload: 1})
  }
}

function onAddAsync() {
  setTimeout(() => {
    store.dispatch({type: 'add', payload: 1})
  }, 2000)
}

function render() {
  ReactDOM.render(
    <div>
      <Chessboard/>
      <Add/>
      <Race/>
      <ReduxDemo value={store.getState()}
                 onAdd1={() => {
                   store.dispatch({type: 'add', payload: 1})
                 }}
                 onAdd2={() => {
                   store.dispatch({type: 'add', payload: 2})
                 }}
                 onAddOdd={onAddOdd}
                 onAddAsync={onAddAsync}/>
    </div>,
    document.getElementById('root')
  )
}


