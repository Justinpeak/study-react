import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState('zs')
  const [blen, setBlen] = useState(true)
  //直接继续网络请求会导致死循环 因为函数组件状态改变会运行整个App函数
  //   axios.get('./数据.json').then(res => {
  // setData(res.data)
  //   })
  //解决方法 使用 useEffect 因为传递的是空数组所以此函数只会执行一次
  useEffect(() => {
    axios.get('./数据.json').then(res => {
      console.log('useEffect--axios')
      setData(res.data)
    })
  }, [])

  useEffect(() => {
    console.log('useEffect--name')
    setName(name.substring(0, 1).toUpperCase() + name.substring(1))
  }, [name])

  return (
    <div>
      {console.log('DOM渲染')}
      useEffect
      <ul>
        {data.map(item => (
          <li key={item.filmId}>{item.name}</li>
        ))}
      </ul>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setName('ls')
        }}
      >
        切换名字
      </button>
      <div>
        {blen && <Child></Child>}
        <button
          onClick={() => {
            setBlen(!blen)
          }}
        >
          销毁组件
        </button>
      </div>
    </div>
  )
}

function Child() {
  useEffect(() => {
    console.log('Child组件被创建')
    return () => {
      console.log('组件被销毁了')
    }
  }, [])
  return <div>Child</div>
}
