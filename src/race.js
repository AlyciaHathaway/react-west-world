import React from 'react'
import './race.css'


function Race() {
  return (
    <>
      <div className="header">
        <Rabbit/>
        <Judge/>
        <Tortoise/>
      </div>
      <Track1/>
      <Track2/>
    </>
  )
}

function Rabbit() {
  return (
    <div className="animals">
      <div>🐰用时</div>
      <div>0</div>
    </div>
  )
}

function Tortoise() {
  return (
    <div className="animals">
      <div>🐢用时</div>
      <div>0</div>
    </div>
  )
}

function Judge() {
  return (
    <div className="judge">裁判</div>
  )
}

function Track1() {
  return (
    <>
      <div>🐰</div>
      <div className="track"></div>
    </>
  )
}

function Track2() {
  return (
    <>
      <div>🐢</div>
      <div className="track"></div>
    </>
  )
}

export {Race}
