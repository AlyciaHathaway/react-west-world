import React, {Component} from 'react'

class ReduxDemo extends Component {
  render() {
    return (
      <div>
        你点击了 <span id="value">{this.props.value}</span> 次
        <div>
          <button onClick={() => this.props.onAdd1()}>+1</button>
          <button onClick={() => this.props.onAdd2()}>+2</button>
          <button onClick={() => this.props.onAddOdd()}>单数+1</button>
          <button onClick={() => this.props.onAddAsync()}>两秒钟后+1</button>
        </div>
      </div>
    )
  }
}

export default ReduxDemo
