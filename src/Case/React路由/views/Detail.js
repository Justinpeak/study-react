import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Detail(props) {
  return (
    <div>
      {/* 返回首页 */}
      <div style={{ width: '80px', height: '28px', background: 'red' }}>
        <NavLink to="/home">返回首页</NavLink>
      </div>
      <h1>name---{props.match.params.name}</h1>
      <h3>id----{props.match.params.myid}</h3>
    </div>
  )
}
