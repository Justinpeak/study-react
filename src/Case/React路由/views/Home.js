import React, { useState } from 'react'
import { Route, Redirect, Switch, NavLink } from 'react-router-dom/cjs/react-router-dom.min'

import Existing from './Home/Existing'
import Undistributed from './Home/Undistributed'
export default function Home() {
  return (
    <>
      <h1>首页---Home</h1>
      <div style={{ width: '100%', height: '260px', background: 'aqua' }}>轮播图</div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <span>
          <NavLink to="/home/existing">正在热映</NavLink>
        </span>
        <span>
          <NavLink to="/home/undistributed">即将上映</NavLink>
        </span>
      </div>
      <div style={{ width: '100%', height: '320px', border: '1px solid #333' }}>
        {/* 嵌套路由的使用 */}
        <Switch>
          <Route path="/home/existing" component={Existing}></Route>
          <Route path="/home/undistributed" component={Undistributed}></Route>
          <Redirect from="/home" to="/home/existing"></Redirect>
        </Switch>
      </div>
    </>
  )
}
