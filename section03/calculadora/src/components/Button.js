import React from 'react';
import './Button.css';

export default function ({ 
  label, 
  operation, 
  double, 
  triple,
  click 
}) 
  {
  return (
    <button className={`
      button
      ${ operation ? 'operation': "" }
      ${ double ? 'double': "" }
      ${ triple ? 'triple': "" }
    `}
      onClick={e => click && click(label)}
    >
      {label}
    </button>
  )
}