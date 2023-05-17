import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import './style.scss'

export function BaseLink({ to, color = "primary", className, children, ...props }) {
  return (
    <Link to={to} >
      <Button color={color} className={`base-link ${className}`} {...props}>{children}</Button>
    </Link>
  );
}
