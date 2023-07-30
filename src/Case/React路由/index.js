import React, { useState, useEffect } from 'react'
import './index.css'
import RouterComponent from './Router'
import TebBar from './views/tebBar.js'
import { HashRouter } from 'react-router-dom'

export default function App() {
  const [tebcolor] = useState(0)
  const [path, setPath] = useState(window.location.hash.substring(2))
  useEffect(() => {
    const newPath = () => setPath(window.location.hash.substring(2))
    window.addEventListener('hashchange', newPath)
    return () => {
      window.removeEventListener('hashchange', newPath)
    }
  }, [])

  return (
    <HashRouter>
      <div className="cinema">
        <div className="component">
          <RouterComponent></RouterComponent>
        </div>
        <div className="tebbar">
          <TebBar tebcolor={tebcolor} path={path} />
        </div>
      </div>
    </HashRouter>
  )
}
