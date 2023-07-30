// 子组件
import React from 'react'
export default class classApp extends React.Component {
  render() {
    return (
      <div>
        {/* 父 --> 子 */}
        <h2>子组件-{this.props.postxx}</h2>

        {/* 子向父通讯  父组件通过props传递一个回调函数由子组件来执行*/}
        {this.props.isinput ? (
          // 子 --> 父
          <div>
            <input onChange={e => this.props.newfztx(e.target.value)}></input>
            <span>【列表父组件中的子组件】修改【首页父组件的属性】</span>
          </div>
        ) : (
          ''
        )}
        {this.props.user ? (
          // 子 --> 父 --> 子
          <div>
            <input onChange={e => this.props.newuser(e.target.value)}></input>
            <span>【我的父组件中的子组件】修改【列表父组件中的子组件内容】</span>
          </div>
        ) : (
          ''
        )}
        {/* {this.props.fztx ? <button onClick={() => this.props.newfztx()}>点击后执行父组件内部函数</button> : ''} */}
      </div>
    )
  }
}
