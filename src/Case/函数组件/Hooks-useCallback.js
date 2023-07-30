import React, { useCallback, useState } from 'react'
/**
 * useCallback(记忆函数) 使用
 */
//父组件
export default function App() {
  const [cont, setCont] = useState(0)
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ])

  const handleRemoveItem = useCallback(
    id => {
      console.log(items.filter(item => item.id !== id))
      setItems(items.filter(item => item.id !== id))
    },
    [items]
  )

  return (
    <div>
      <button onClick={() => setCont(cont + 1)}>cont+1</button>
      {cont}
      <List items={items} onRemoveItem={handleRemoveItem} />
    </div>
  )
}
//子组件List
function List({ items, onRemoveItem }) {
  return (
    <ul>
      {console.log('List渲染了')}
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => onRemoveItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}
