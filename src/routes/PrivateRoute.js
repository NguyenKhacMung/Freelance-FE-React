import { Route, Navigate } from 'react-router-dom';

export function PrivateRoute({ component: Component, ...props }) {
  const isAuthenticated = true

  return isAuthenticated ? (
    <Route {...props} element={<Component />} />
  ) : (
    <Navigate to="/login" replace />
  );
}