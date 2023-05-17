import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

export function PrivateRoute({ path, element }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
}