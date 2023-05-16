import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const BtnLink = ({ path, text, className, style }) => {
  return (
    <Link
      to={path}
      style={style}
      className={`btn btn-primary ${className}`}
    >
      {text}
    </Link>
  )
}