import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Detail from '../views/Detail'
import Home from '../views/Home'
import Choose from '../views/Choose'
import User from '../views/User'

export default function RouterComponent() {
  return (
    <>
      {/* 使用Switch取消强制重定向 */}
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/choose" component={Choose}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/detail/:myid&:name" component={Detail}></Route>

        {/* Redirect重定向 
            from哈希值匹配 当哈希地址都不匹配时进行重定向
            to前往那个路径  
            刷新时会强制重定向 Switch可以取消强制重定向*/}
        <Redirect from="" to="/home"></Redirect>
      </Switch>
    </>
  )
}
