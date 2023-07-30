import '../index.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function TabBar(props) {
  const [teblis, setTeblis] = useState([
    { id: 1, name: '电影', path: '/home' },
    { id: 2, name: '选择', path: '/choose' },
    { id: 3, name: '我的', path: '/user' }
  ])
  const newcolor = value => {
    window.location.href = '#/' + value.path
  }
  const newPath = () => {
    if (props.path === 'home/existing' || props.path === 'home/undistributed') {
      return 'home'
    }
    return props.path
  }
  return (
    <div className="teb">
      <ul className="tebcent">
        {teblis.map((item, index) => (
          <li key={item.id} className={newPath() === item.path ? 'licolor' : ''}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
