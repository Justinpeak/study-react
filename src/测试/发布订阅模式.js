/**
 * @发布订阅模式案例
 *
 */

import React from 'react'
import axios from 'axios'

let bus = {
  list: [],

  get(fn) {
    //订阅者
    this.list.push(fn)
  },
  set(value) {
    // 发布者
    this.list.map(item => item(value))
  }
}
// /---------------------------案例-----------------------------/

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      newrender: true,
      synopsis: '111'
    }
    axios
      .get('./数据.json')
      .then(res => {
        console.log(res.data)
        this.setState({
          list: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <FilmeData synopsis={this.state.synopsis}></FilmeData>

        {this.state.list.map(item => (
          <Filme key={item.filmId} item={item} newSynopsis={this.newSynopsis.bind(this)}></Filme>
        ))}
      </div>
    )
  }
  newSynopsis(data) {
    this.setState({
      synopsis: data
    })
  }
}

class Filme extends React.Component {
  state = {
    style: {
      width: '420px',
      height: '60px',
      marginTop: '10px',
      border: '1px solid #333'
    }
  }
  render() {
    let { name, grade, synopsis } = this.props.item

    return (
      <div
        style={this.state.style}
        onClick={() => {
          bus.set(synopsis)
        }}
      >
        <div>
          <dl>
            <dt>{name}</dt>
            <dd>{grade}</dd>
          </dl>
        </div>
      </div>
    )
  }
}

class FilmeData extends React.Component {
  constructor() {
    super()
    bus.get(data => {
      console.log(data)
      this.setState({ synopsis: data })
    })
    this.state = {
      synopsis: '',
      dataStyle: {
        position: 'fixed',
        width: '300px',
        height: '300px',
        top: '50px',
        right: '150px',
        background: 'aqua',
        border: '1px solid #333'
      }
    }
  }

  render() {
    return <div style={this.state.dataStyle}>{this.state.synopsis ? this.state.synopsis : '没有内容'}</div>
  }
}
