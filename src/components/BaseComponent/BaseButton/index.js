import React from 'react'
import { Button } from 'reactstrap'
import './style.scss'

export const BaseButton = ({ color = "primary", children, className, ...props }) => {
  return (
    <Button color={color}  {...props} className={`base-button ${className}`} >
      {children}
    </Button >
  );
}
