import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/todos">
    <i className="fa fa-calendar-check-o"></i>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/todos">Tarefas</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Sobre</Link>
      </li>
    </ul>
  </div>
</nav>
)