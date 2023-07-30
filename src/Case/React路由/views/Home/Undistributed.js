import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Undistributed() {
  const [style] = useState({ width: '100%', height: '32px', border: '1px solid #333', marginBottom: '5px', textAlign: 'center' })

  const [list] = useState([
    { id: 1, name: '宁宁' },
    { id: 2, name: '牛牛' },
    { id: 3, name: '张张' },
    { id: 4, name: '李李' },
    { id: 5, name: '王王' },
    { id: 6, name: '筱筱' },
    { id: 7, name: '黄黄' }
  ])
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
