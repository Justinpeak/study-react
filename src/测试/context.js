/**
 * @生产者消费者模式
 */
import React from 'react'
import axios from 'axios'
const GlobalContext = React.createContext() //创建context对象
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      newrender: true,
      synopsis: ''
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
      <GlobalContext.Provider
        value={{
          data: this.state.synopsis,
          newdata: data => {
            this.setState({ synopsis: data })
          }
        }}
      >
        <div>
          <FilmeData></FilmeData>

          {this.state.list.map(item => (
            <Filme key={item.filmId} item={item}></Filme>
          ))}
        </div>
      </GlobalContext.Provider>
    )
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
      <GlobalContext.Consumer>
        {value => {
          return (
            <div
              style={this.state.style}
              onClick={() => {
                // console.log(synopsis)
                value.newdata(synopsis)
                //   bus.set(synopsis)
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
        }}
      </GlobalContext.Consumer>
    )
  }
}

class FilmeData extends React.Component {
  constructor() {
    super()
    this.state = {
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
    return (
      <GlobalContext.Consumer>
        {value => {
          return <div style={this.state.dataStyle}>{value.data !== '' ? value.data : '没有内容'}</div>
        }}
      </GlobalContext.Consumer>
    )
  }
}
