/**
 * @生产者消费者模式 useContext版
 */
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
const GlobalContext = React.createContext() //创建context对象

export default function App() {
  const [list, setList] = useState([])
  const [data, setData] = useState('')
  useEffect(() => {
    //只执行一次的网络请求函数
    axios
      .get('./数据.json')
      .then(res => {
        console.log(res.data)
        setList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    //声明生产者
    <GlobalContext.Provider
      value={{
        datas: data,
        newdata: datat => {
          console.log(datat, 'datat')
          setData(datat)
        }
      }}
    >
      <div>
        <FilmeData></FilmeData>

        {list.map(item => (
          <Filme key={item.filmId} item={item}></Filme>
        ))}
      </div>
    </GlobalContext.Provider>
  )
}
//数据展示区
function FilmeData() {
  //消费者通过useContext 在value中可以获取到 生产者的状态
  const value = useContext(GlobalContext)
  const [style] = useState({ position: 'fixed', width: '300px', height: '300px', top: '50px', right: '150px', background: 'aqua', border: '1px solid #333' })
  return <div style={style}>{value.datas !== '' ? value.datas : '没有内容'}</div>
}
//子组件
function Filme(props) {
  let { name, grade, synopsis } = props.item
  //消费者通过useContext 在value中可以获取到 生产者的状态
  const value = useContext(GlobalContext)
  const [style] = useState({ width: '420px', height: '60px', marginTop: '10px', border: '1px solid #333' })
  return (
    <div
      style={style}
      onClick={() => {
        value.newdata(synopsis)
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
