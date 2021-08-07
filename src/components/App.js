import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu'
import Users from './Users'
import Tasks from './Tasks'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path='/' component={Users} />
      <Route exact path='/tasks' component={Tasks} />
    </BrowserRouter>
  )
}

export default App
