import { Component } from 'react'

export default class App extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  newset() {
    let setList = [...[19, 18, 17, 16, 15, 14, 13, 12, 11, 10], ...this.state.list]
    this.setState({
      list: setList
    })
  }
  render() {
    return (
      <div>
        <h1>APP-父组件</h1>
        <button onClick={this.newset.bind(this)}>数据添加</button>
        <div className="box" style={{ height: '100px', width: '400px', overflow: 'scroll' }}>
          <ul>
            {this.state.list.map(item => (
              <li key={item} style={{ height: '50px', border: '1px solid #333' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
