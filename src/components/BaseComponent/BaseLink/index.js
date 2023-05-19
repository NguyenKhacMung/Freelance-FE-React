import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import { Button } from 'reactstrap';
import './style.scss'

export function BaseLink({ to, color = "primary", className, children, ...props }) {
  return (
    <Link to={to} className={className} >
      <Button color={color} className={`base-link ${className}`} {...props}>{children}</Button>
    </Link>
  );
}

export function CustomLink({ to, className, children, ...props }) {
  const toMatch = useMatch(to);
  return (
    <Link to={to} className={`${toMatch ? 'active' : ''} ${className}`}{...props}>
      {children}
    </Link>
  );
}
