/**
 * useReducer 的使用
 * 在组件外声明 初始状态 和 状态更新函数  【名称自定义】
 */

import { useReducer } from 'react'

//初始状态
const initialState = { count: 0 }

//状态更新函数
function reducer(state, action) {
  //判断 action.type 执行对应的逻辑代码
  switch (action.type) {
    case 'increment':
      // state.count可以获取当前状态 注意不要直接返回修改state.count  要将其赋值给其他变量进行返回
      return { count: state.count + 1 }

    case 'decrement':
      return { count: state.count - 1 }

    default:
      throw new Error()
  }
}

export default function Counter() {
  //接收两个参数 状态更新函数，初始状态 ;返回两个数组元素 第一个:状态，第二给:状态更新函数<别搞反了>
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      {/* 通过 state.count 可以获取状态*/}
      Count: {state.count}
      {/*通过 dispatch({ type: '' }) type传入一个值用于逻辑判断*/}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  )
}
