import React from 'react'
import './index.css'
import Film from './Film/index'
import Choice from './Choice/index'
import User from './User/index'
import TebBar from './Tebbar/tebBar.js'
import Navbar from './Navbar'

export default class Cinema extends React.Component {
  state = {
    tebcolor: 0
  }
  newwhich(index) {
    let mi = index
    if (index === undefined) mi = 0
    this.setState({
      tebcolor: mi
    })
  }
  newUser() {
    this.setState({
      tebcolor: 2
    })
  }
  which() {
    switch (this.state.tebcolor) {
      case 0:
        return <Film newUser={this.newUser.bind(this)}></Film>
      case 1:
        return <Choice></Choice>
      case 2:
        return <User></User>
      default:
        return null
    }
  }
  render() {
    return (
      <div className="cinema">
        <div className="component">{this.which()}</div>
        <div className="tebbar">
          <TebBar newwhich={this.newwhich.bind(this)} tebcolor={this.state.tebcolor} />
        </div>
      </div>
    )
  }
}
