import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Existing(props) {
  const [list] = useState([
    { id: 1, name: '宁一' },
    { id: 2, name: '牛二' },
    { id: 3, name: '张三' },
    { id: 4, name: '李四' },
    { id: 5, name: '王五' },
    { id: 6, name: '筱六' },
    { id: 7, name: '黄七' }
  ])
  const [style] = useState({ width: '100%', height: '32px', border: '1px solid #333', marginBottom: '5px', textAlign: 'center' })

  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item.id} style={style}>
            <NavLink to={'/detail/' + item.id + '&' + item.name}> {item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
