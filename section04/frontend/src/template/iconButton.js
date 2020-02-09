import React from 'react'
import If from './if'

export default ({ style, icon, hide, onClick }) => (
  <If test={!hide}>
      <button className={`btn btn-${style}`}
          onClick={onClick}
      >
        <i className={`fa fa-${icon}`}></i>
      </button>
  </If>
)
