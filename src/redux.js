import React, {Component} from 'react'
import {connect} from 'react-redux'

class ReduxDemo extends Component {
  render() {
    return (
      <div>
        你点击了 <span id="value">{this.props.n}</span> 次
        <div>
          <button onClick={() => this.props.add1()}>+1</button>
          <button>+2</button>
          <button>单数+1</button>
          <button>两秒钟后+1</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    n: state.n
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add1: () => {
      dispatch({type: 'add', payload: 1})
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)

