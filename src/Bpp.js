//类组件的声明
import React from 'react'
import './Bapp.css'
export default class Wekapp extends React.Component {
  state = {
    list: []
  }
  render() {
    return (
      <div>
        <div id="conter">
          <input ref={this.mytext}></input>
          <button onClick={this.clickpost.bind(this)}>点击获取输入框内容</button>
          <div id="ctenlist">
            <ol>
              {this.state.list.map((item, index) => (
                <li key={item.id}>
                  {item.text}
                  {/* {<span dangerouslySetInnerHTML={{ __html: item.text }}></span>} 富文本测试*/}
                  <button id="btn" onClick={() => this.deltli(index)}>
                    X
                  </button>
                </li>
              ))}
              {this.state.list.length === 0 ? <div>暂无内容</div> : null}
            </ol>
          </div>
        </div>
      </div>
    )
  }

  mytext = React.createRef()
  ol = React.createRef()

  deltli(index) {
    let dellist = this.state.list.concat()
    dellist.splice(index, 1)
    this.setState({
      list: dellist
    })
  }
  clickpost() {
    if (this.mytext.current.value === '') {
      alert('请输入内容')
    } else {
      let newlist = [...this.state.list]
      newlist.splice(0, 0, {
        id: Math.random() * 999,
        text: this.mytext.current.value
      })
      this.setState({
        list: newlist
      })
      this.mytext.current.value = ''
    }
  }
}
