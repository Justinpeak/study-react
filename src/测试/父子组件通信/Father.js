//父组件
import React from 'react'
import Son from './Son'
export default class classApp extends React.Component {
  state = {
    name: '这里是父组件的列表组件',
    newinput: '首页',
    std: {
      padding: '10px',
      border: '1px solid #333'
    },
    hom: '父组件--首页',
    fztx: true,
    isinput: true,
    user: true,
    username: '我的',
    userpost: '列表'
  }
  newhom(e) {
    let mi = e.target.value
    if (e.target.value === '') mi = '首页'
    this.setState({
      newinput: mi
    })
  }
  newfztx(value) {
    let mi = value
    if (value === '') mi = '父组件--首页'

    this.setState({
      hom: mi
    })
  }
  newuser(value) {
    let mi = value
    if (value === '') mi = '列表'

    this.setState({
      userpost: mi
    })
  }
  render() {
    return (
      <div>
        <div style={this.state.std}>
          <h1>{this.state.hom}</h1>
          <input onChange={this.newhom.bind(this)}></input>
          <i>父组件修改子组件数据</i>
          <Son postxx={this.state.newinput} />
        </div>

        <div style={this.state.std}>
          <h1>父组件--列表</h1>
          <Son postxx={this.state.userpost} fztx={this.state.fztx} newfztx={this.newfztx.bind(this)} isinput={this.state.isinput} />
        </div>

        <div style={this.state.std}>
          <h1>父组件--我的</h1>
          <Son user={this.state.user} newuser={this.newuser.bind(this)} postxx={this.state.username} />
        </div>
      </div>
    )
  }
}
