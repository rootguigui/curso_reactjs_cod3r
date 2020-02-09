import React from 'react'

export default ({ style, icon, hide, onClick }) => {
  if (hide) {
    return null
  } else {
    return (
      <button className={`btn btn-${style}`}
          onClick={onClick}
      >
        <i className={`fa fa-${icon}`}></i>
      </button>
    )
  }

}