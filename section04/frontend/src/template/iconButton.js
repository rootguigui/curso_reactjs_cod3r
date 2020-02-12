import React from 'react'
import If from './if'

export default ({ style, icon, hide, onClick, title }) => (
  <If test={!hide}>
      <button className={`btn btn-${style}`}
          onClick={onClick}
          data-toggle="tooltip" data-placement="top" title={title}
      >
        <i className={`fa fa-${icon}`}></i>
      </button>
  </If>
)
