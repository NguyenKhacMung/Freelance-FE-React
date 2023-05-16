import React from 'react'
import { Button } from 'reactstrap'
import './style.scss'


export const BtnSecondary = ({ onClick, text, className, style, }) => {
  return (
    <Button outline
      onClick={onClick}
      style={style}
      className={className}
    >
      {text}
    </Button>
  )
}
