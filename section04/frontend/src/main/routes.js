import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <>
      <Route path="/todos">
        <Todo />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Redirect from="*" to="/todos"/>
    </>
)