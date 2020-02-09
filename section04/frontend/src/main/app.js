import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import { BrowserRouter as Router, Switch, HashRouter } from 'react-router-dom' 

import Menu from '../template/menu'
import Routes from './routes'

export default function (props) {
  return (
    <div className="containe-fluid">
      <Router>
        <HashRouter>
          <Menu />
          <Switch>
            <Routes />
          </Switch>
        </HashRouter>
      </Router>
    </div>
  )
}