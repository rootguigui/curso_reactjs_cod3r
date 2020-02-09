import React from 'react'

export default ({ children, test }) => {
  if (test)
    return children
  else
    return false
}