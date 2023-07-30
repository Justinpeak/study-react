import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState(true)
  return (
    <div>
      useState--{name ? '张三' : '李四'}
      <button onClick={() => setName(!name)}>点击切换</button>
    </div>
  )
}
