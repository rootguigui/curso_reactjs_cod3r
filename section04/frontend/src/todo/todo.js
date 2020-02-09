import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

import TodoForm from './todoForm'
import TodoList from './todoList'
import api from '../service/api'

class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async handleAdd() {
    const { list, description } = this.state
    const todo = await api.post('todos', { description })
      
    // this.setState({
    //   list: [ ...list, description ]
    // })
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  render() {
    const { description } = this.state
    return (
      <div>
        <br />
        <PageHeader name="Tarefas" small="Cadastro" />
        <br />
        <TodoForm 
              handleAdd={this.handleAdd} 
              handleChange={this.handleChange}
              value={description} />
        <TodoList />
      </div>
    )
  }
}

export default Todo