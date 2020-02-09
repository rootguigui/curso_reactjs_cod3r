import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default function () {
  return (
    <div role="form" className="todoForm">
      <div className="row">
        <Grid cols="12 9 10">
          <input className="form-control" id="description" placeholder="Adicione uma tarefa" />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus"/>
        </Grid>
      </div>
    </div>
  )
}