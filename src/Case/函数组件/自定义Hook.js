/**
 * 自定义Hook的使用
 * 好处: 组件主体更清晰，增加逻辑代码复用性
 */

import { useState, useEffect } from 'react'
//  useWindowWidth 方法就是自定义Hook的处理函数
function useWindowWidth() {
  console.log('自定义Hook被执行')
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    console.log('逻辑代码调用')
    //执行handleResize 就会给 width 状态赋值
    const handleResize = () => setWidth(window.innerWidth)
    //开启窗口监听事件 窗口大小改变就会调用
    window.addEventListener('resize', handleResize)
    return () => {
      //组件被销毁时会 清除窗口监听事件

      window.removeEventListener('resize', handleResize)
      console.log('组件被销毁了')
    }
  }, [])

  //返回逻辑代码执行结果
  return width
}
//组件 每次状态改变 MyComponent函数会重新执行
function MyComponent() {
  console.log('MyComponent-组件被创建')
  //通过 useWindowWidth 即可获取到上面处理函数的返回结果
  return (
    <div>
      获取可视页面窗口长度-- {useWindowWidth()}px{console.log('MyComponent-被渲染')}
    </div>
  )
}
export default function App() {
  const [blen, setBlen] = useState(true)
  return (
    <>
      {/*进行组件创建和销毁 */}
      {blen && <MyComponent></MyComponent>}
      <button onClick={() => setBlen(!blen)}>点击{blen ? '删除元素' : '创建元素'}</button>
    </>
  )
}
