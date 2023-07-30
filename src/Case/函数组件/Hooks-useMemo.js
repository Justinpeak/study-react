import { useMemo, useState } from 'react'

export default function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [list, setList] = useState([])

  //没优化 使用多少次 result 就会执行多少次函数
  //   let result = function () {
  //     console.log('11')
  //     return a + b
  //   }

  //优化 只要依赖值不变 不管使用多少次 resultPuls 都只会执行一次函数
  let resultPuls = useMemo(() => {
    console.log('11')
    return a + b
  }, [a, b])

  return (
    <div>
      {resultPuls}
      {resultPuls}
      <button
        onClick={() => {
          //点击会使用 resultPuls
          setList([...list, '新数据'])
        }}
      >
        点击读取result
      </button>
      <ul>
        {list.map(item => (
          <li>li--{resultPuls}</li>
        ))}
      </ul>
    </div>
  )
}
