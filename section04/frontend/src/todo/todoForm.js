import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default function ({ handleAdd, handleChange, handleSearch, handleClear, description }) {

  const handlerKey = e => {
    if (e.key === 'Enter') {
      e.shiftKey ? handleSearch() : handleAdd()
    } else if (e.key == 'Escape') {
      handleClear()
    }
  }

  return (
    <div role="form" className="todoForm">
      <div className="row">
        <Grid cols="12 9 10">
          <input className="form-control" 
                  id="description" 
                  onKeyUp={handlerKey}
                  placeholder="Adicione uma tarefa"
                  onChange={handleChange}
                  value={description} />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" onClick={handleAdd} title="Acidionar"/>
          <IconButton style="info" icon="search" onClick={handleSearch} title="Pesquisar"/>
          <IconButton style="secondary" icon="close" onClick={handleClear} title="Limpar Pesquisa"/>
        </Grid>
      </div>
    </div>
  )
}