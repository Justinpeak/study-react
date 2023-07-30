import React, { Component } from 'react'
// import Navbar from '../Navbar'

export default class Film extends Component {
  render() {
    return (
      <div>
        {/* <div className="nav">
          <Navbar></Navbar>
        </div> */}
        <h1>这里Film</h1>

        <button onClick={this.props.newUser}>USER</button>
      </div>
    )
  }
}
