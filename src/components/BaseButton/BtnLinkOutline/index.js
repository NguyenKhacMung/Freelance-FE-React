import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const BtnLinkOutline = ({ path, text, className, style }) => {
  return (
    <Link
      to={path}
      style={style}
      className={`btn btn-outline-secondary base-link ${className}`}
    >
      {text}
    </Link>
  )
}