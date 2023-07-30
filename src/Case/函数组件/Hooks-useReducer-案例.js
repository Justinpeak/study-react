/**
 * @生产者消费者模式 useContext+useReducer版
 */
import React, { useEffect, useState, useContext, useReducer } from 'react'
import axios from 'axios'
const GlobalContext = React.createContext() //创建context对象

const initialState = { list: [], data: '' }
function reducer(state, action) {
  const data = { ...state }
  switch (action.type) {
    case 'setList':
      data.list = action.value
      return data
    case 'setData':
      data.data = action.value
      return data
    default:
      return
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    //只执行一次的网络请求函数
    axios
      .get('./数据.json')
      .then(res => {
        dispatch({ type: 'setList', value: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    //声明生产者
    <GlobalContext.Provider
      value={{
        datas: state.data,
        newdata: datat => {
          dispatch({ type: 'setData', value: datat })
        }
      }}
    >
      <div>
        <FilmeData></FilmeData>

        {state.list.map(item => (
          <Filme key={item.filmId} item={item}></Filme>
        ))}
      </div>
    </GlobalContext.Provider>
  )
}
//数据展示区
function FilmeData() {
  //消费者通过useContext 在value中可以获取到 生产者的状态
  const { datas } = useContext(GlobalContext)
  const [style] = useState({ position: 'fixed', width: '300px', height: '300px', top: '50px', right: '150px', background: 'aqua', border: '1px solid #333' })
  return <div style={style}>{datas !== '' ? datas : '没有内容'}</div>
}
//子组件
function Filme(props) {
  let { name, grade, synopsis } = props.item
  //消费者通过useContext 在value中可以获取到 生产者的状态
  const { newdata } = useContext(GlobalContext)
  const [style] = useState({ width: '420px', height: '60px', marginTop: '10px', border: '1px solid #333' })
  return (
    <div
      style={style}
      onClick={() => {
        newdata(synopsis)
      }}
    >
      <div>
        <dl>
          <dt>{name}</dt>
          <dd>{grade}</dd>
        </dl>
      </div>
    </div>
  )
}
