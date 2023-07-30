// BetterScroll一个用于平滑滚动的js库
import React from 'react'
import BetterScroll from 'better-scroll'

export default class Btscroll extends React.Component {
  state = {
    list: [],
    divsty: {
      width: '320px',
      height: '200px',
      background: 'red',
      overflow: 'hidden'
    }
  }

  render() {
    return (
      <div>
        <div className="contli" style={this.state.divsty}>
          <ul className="isul">
            {this.state.list.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <button onClick={this.onlist.bind(this)}> 点击开始测试平滑滚动</button>
      </div>
    )
  }
  onlist() {
    let lis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    this.setState(
      {
        list: lis
      },
      () => {
        new BetterScroll('.contli')
      }
    )
  }
}
