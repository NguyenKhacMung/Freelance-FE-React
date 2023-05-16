import React from 'react'
import { Route, Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, restricted, ...props }) => {
  const isAuthenticated = true
  return restricted && isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <Route {...props} element={<Component />} />
  );
}
