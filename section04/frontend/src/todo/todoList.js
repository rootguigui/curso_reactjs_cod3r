import React from 'react'
import IconButton from '../template/iconButton'

export default ({ list, handleRemove, handleMarkAsDone, handleMarkAsPending }) => {
  const renderRows = () => {
    const todos = list || []
    return todos.map(todo => (
        <tr key={todo._id}>
          <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
          <td>
            <IconButton title="Tarefa Feita" hide={todo.done} style="success" icon="check" onClick={() => handleMarkAsDone(todo)}/>
            <IconButton title="Tarefa Pendente" hide={!todo.done} style="warning" icon="undo" onClick={() => handleMarkAsPending(todo)}/>
            <IconButton title="Remover Tarefa" hide={todo.done} style="danger" icon="trash" onClick={() => handleRemove(todo)}/>
          </td>
        </tr>
      )
    )
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="todoActions">Ações</th>
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  )
}