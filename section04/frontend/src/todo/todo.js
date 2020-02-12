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
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.refresh()
  }

  async refresh (description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    const todos = await api.get(`todos?sort=-createdAt${search}`);
    this.setState({
      ...this.state,
      description,
      list: todos.data
    })
  }

  async handleAdd() {
    const { description } = this.state
    await api.post('todos', { description })
    this.setState({ description: '' })
    this.refresh()
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  async handleMarkAsDone(todo) {
    await api.put(`todos/${todo._id}`, { ...todo, done: true })
    this.refresh(this.state.description)
  }

  async handleMarkAsPending(todo) {
    await api.put(`todos/${todo._id}`, { ...todo, done: false })
    this.refresh(this.state.description)
  }

  handleRemove(todo) {
    api.delete(`todos/${todo._id}`)
      .then(result => this.refresh(this.state.description))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleClear() {
    this.refresh()
  }

  render() {
    return (
      <div>
        <br />
        <PageHeader name="Tarefas" small="Cadastro" />
        <br />
        <TodoForm 
              handleAdd={this.handleAdd} 
              handleChange={this.handleChange}
              handleSearch={this.handleSearch}
              handleClear={this.handleClear}
              value={this.state.description} />
        <TodoList 
          list={this.state.list} 
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          handleRemove={this.handleRemove} />
      </div>
    )
  }
}

export default Todo