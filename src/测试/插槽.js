/**
 * 插槽
 */
import React from 'react'
export default class App extends React.Component {
  render() {
    return (
      <div>
        App
        <Child>
          <div>0000</div>
          <div>1111</div>
        </Child>
      </div>
    )
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        Child
        {/* 插槽固定写法   不使用索引则展示所有插槽内的元素*/}
        {/* 插槽内的元素会以数组形式存储可以用索引获取对应的元素来调整位置  空格也会占取索引*/}
        {this.props.children[0]}
        {this.props.children[1]}
        {console.log(this.props.children)}
      </div>
    )
  }
}
