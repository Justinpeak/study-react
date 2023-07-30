//函数式组件

import Bpp from './Bpp'
import './Css.css'
export default function App() {
  return (
    <div id="ctent">
      <h1 style={{ color: 'red' }} onClick={onclickfn}>
        嗨咯
      </h1>
      <Bpp />
    </div>
  )
  function onclickfn() {
    console.log('嗨咯')
  }
}
