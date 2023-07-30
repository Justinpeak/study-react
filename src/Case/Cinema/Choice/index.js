import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
export default class Choice extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      belis: []
    }
    axios
      .get('./ChoiceData.json')
      .then(res => {
        console.log(res.data)
        this.setState({ list: res.data, belis: res.data })
      })
      .catch(eer => console.log(eer, '错误'))
  }
  render() {
    return (
      <div>
        <div className="nav">
          <div className="search">
            <input className="search_ipt" onCompositionEnd={this.postInout.bind(this)} onInput={this.endinput.bind(this)}></input>
            <button className="search_btn">搜索</button>
          </div>
          <div className="option"></div>
        </div>
        <div className="content">
          <ul>
            {this.state.list.map(item => (
              <li key={item.cinemaId} className="list">
                <div className="infor">
                  <dl>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                  </dl>
                </div>
                <div className="price">
                  <dl>
                    <dt>￥{item.lowPrice / 100}</dt>
                    <dd>距离未知</dd>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  //模糊搜索
  postInout(e) {
    // console.log(this.state.list)
    let newlist = this.state.list.filter(item => item.name.includes(e.data))
    this.setState({
      list: newlist
    })
  }
  endinput(e) {
    console.log(e.target.value)
    if (e.target.value === '') {
      this.setState({
        list: this.state.belis
      })
    }
  }
  //节流函数
  throttle(fn, delay) {
    console.log('000')
    //记录上次触发的时间
    let lasTime = 0
    return function () {
      //记录当前函数的触发时间
      let nowTime = Date.now()
      console.log(nowTime)
      if (nowTime - lasTime > delay) {
        //修正this执行执行函数
        console.log('节流')
        fn.call(this)
        //同步执行结束时间
        lasTime = nowTime
      }
    }
  }
}
