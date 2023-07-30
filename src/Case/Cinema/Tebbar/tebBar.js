import React from 'react'
import '../index.css'

export default class tabBar extends React.Component {
  state = {
    teblis: [
      { id: 1, name: '电影' },
      { id: 2, name: '选择' },
      { id: 3, name: '我的' }
    ],
    tebcolor: 0
  }
  newcolor(index) {
    let mi = index
    if (index === undefined) mi = 0
    this.props.newwhich(mi)
    this.setState({
      tebcolor: mi
    })
  }
  render() {
    return (
      <div className="teb">
        <ul className="tebcent">
          {this.state.teblis.map((item, index) => (
            <li key={item.id} className={this.props.tebcolor === index ? 'licolor' : ''} onClick={() => this.newcolor(index)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
