import React from 'react'

function Add(props) {
  return (
    <div>
      <Box name="新垣结衣即是正义"/>
    </div>
  )
}

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  add() {
    // 正确，函数方式，实际加 2
    this.setState(state => {
      return {number: state.number + 1}
    })
    this.setState(state => {
      // 这里使用上面返回的 state
      return {number: state.number + 1}
    })
  }

  minus() {
    // 错误，异步更新，实际减 1
    this.setState({
      number: this.state.number - 1
    })
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div className="red">
        <span>{this.state.number}</span>
        <button onClick={this.add.bind(this)}>+2</button>
        <button onClick={this.minus.bind(this)}>-2</button>
        {this.props.name}
      </div>
    )
  }
}

export {Add}
