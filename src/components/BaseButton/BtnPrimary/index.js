import React from 'react'
import { Button } from 'reactstrap'
import './style.scss'

export const BtnPrimary = ({ onClick, text, className, style, children }) => {
  return (
    // <a href="#" className="btn btn-primary">
    //   {text}
    // </a>
    <Button
      color="primary"
      onClick={onClick}
      style={style}
      className={`base-button ${className}`}
    >
      {text}
      {children}
    </Button>
  )
}