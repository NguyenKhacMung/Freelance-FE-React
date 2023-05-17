import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

export const PublicRoute = ({ path, element }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <Route path={path} element={element} />
  );
}
