import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default function ({ handleAdd, handleChange, description }) {
  return (
    <div role="form" className="todoForm">
      <div className="row">
        <Grid cols="12 9 10">
          <input className="form-control" 
                  id="description" 
                  placeholder="Adicione uma tarefa"
                  onChange={handleChange}
                  value={description} />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" onClick={handleAdd}/>
        </Grid>
      </div>
    </div>
  )
}