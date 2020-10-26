import React from 'react'
import './race.css'


class Race extends React.Component {
  constructor() {
    super()
    this.state = {
      result1: 0,
      result2: 0
    }
    this.initTimer = new Date()
  }

  success1() {
    console.log('兔子跑完了')
    this.setState({
      result1: new Date() - this.initTimer
    })
  }

  success2() {
    console.log('乌龟跑完了')
    this.setState({
      result2: new Date() - this.initTimer
    })
  }

  render() {
    return (
      <>
        <div className="header">
          <Rabbit result={this.state.result1}/>
          <Judge/>
          <Tortoise result={this.state.result2}/>
        </div>
        <Playground success1={this.success1.bind(this)} success2={this.success2.bind(this)}/>
      </>
    )
  }

}

function Rabbit(props) {
  return (
    <div className="animals">
      <span role="img" aria-label="兔子">🐰</span>
      用时
      <div>{props.result}</div>
    </div>
  )
}

function Tortoise(props) {
  return (
    <div className="animals">
      <span role="img" aria-label="乌龟">🐢</span>
      用时
      <div>{props.result}</div>
    </div>
  )
}

function Judge() {
  return (
    <div className="judge">裁判</div>
  )
}

function Playground(props) {
  let {success1} = props
  let {success2} = props
  return (
    <div className="playground">
      <Track1 success={success1}/>
      <Track2 success={success2}/>
    </div>
  )
}

class Track1 extends React.Component {
  constructor(props) {
    super(props)
    let n = 0
    this.state = {
      style: {
        transform: `translate(${n}%)`
      }
    }
    let timerId = setInterval(() => {
      n += 10
      this.setState({
        style: {
          transform: `translate(${n}%)`
        }
      })
      if (n >= 100) {
        window.clearInterval(timerId)
        props.success()
      }
    }, 1000)
  }

  render() {
    return (
      <>
        <div className="player" style={this.state.style}>
          <span role="img" aria-label="兔子">🐰</span>
        </div>
        <div className="track"/>
      </>
    )
  }
}

class Track2 extends React.Component {
  constructor(props) {
    super(props)
    let n = 0
    this.state = {
      style: {
        transform: `translate(${n}%)`
      }
    }
    let timerId = setInterval(() => {
      n += 5
      this.setState({
        style: {
          transform: `translate(${n}%)`
        }
      })
      if (n >= 100) {
        window.clearInterval(timerId)
        props.success()
      }
    }, 1000)
  }

  render() {
    return (
      <>
        <div className="player" style={this.state.style}>
          <span role="img" aria-label="乌龟">🐢</span>
        </div>
        <div className="track"/>
      </>
    )
  }
}

export {Race}
