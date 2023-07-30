import { Component } from 'react'

export default class App extends Component {
  state = {
    name: '张三',
    index: 0
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ name: '李四' })}>{this.state.name}</button>
        <div>
          <button onClick={() => this.setState({ index: this.state.index + 1 })}>点击++</button>
        </div>
        <Child index={this.state.index}></Child>
      </div>
    )
  }
  //控制 render 是否渲染 返回 true false
  shouldComponentUpdate(nextProps, nextState) {
    //nextProps:最新属性    nextState:最新状态
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) return true
    return false
  }
  //可以修改或获取最新状态和DOM
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, '老状态')
    console.log(prevProps, '老属性')
    console.log(this.state.name, 'componentDidUpdate')
    console.log('=============================')
  }
  //不安全 以遗弃 不建议使用
  UNSAFE_componentWillUpdate() {
    console.log(this.state.name, 'componentWillUpdate')
    console.log('=============================')
  }
}

class Child extends Component {
  //父组件修改属性时触发  不安全不建议使用
  UNSAFE_componentWillReceiveProps(nextProps) {
    // nextProps  最新的属性
    console.log('父组件修改了子组件属性', nextProps)
  }
  render() {
    return <div>子组件: {this.props.index}</div>
  }
}
