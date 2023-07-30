import { Component } from 'react'

export default class App extends Component {
  state = {
    blen: true
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={() => this.setState({ blen: !this.state.blen })}>销毁子组件</button>
        {this.state.blen && <Child></Child>}
      </div>
    )
  }
}

class Child extends Component {
  componentDidMount() {
    //开启定时器 组件被销毁不手动清除仍然会存在
    this.timer = setInterval(() => {
      console.log('11')
    }, 1000)
  }
  componentWillUnmount() {
    //组件销毁时触发 钩子
    console.log('Child被销毁了')
    //手动结束定时器
    clearInterval(this.timer)
  }
  render() {
    return <div>Child</div>
  }
}
