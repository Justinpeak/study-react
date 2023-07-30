import { useRef } from 'react'
export default function App() {
  const data = useRef() //绑定DOM节点
  const cont = useRef(0) //存储数据
  return (
    <div>
      <h1 ref={data}>h1-1111</h1>
      <button
        onClick={() => {
          cont.current++ //数据修改
          console.log(cont.current, 'cont-数据存储模式') //获取数据
          console.log(data.current.innerText, 'data-DOM绑定模式') //获取到绑定DOM的值
        }}
      >
        获取h1的值
      </button>
    </div>
  )
}
