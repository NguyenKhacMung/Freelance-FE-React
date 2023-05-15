import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  // const {
  //   authState: { authLoading, isAuthenticated },
  // } = useContext(AuthContext)

  // if (authLoading) {
  //   return <SpinerLogin />
  // }
  const isAuthenticated = true
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const PublishRoute = () => {
  // const {
  //   authState: { authLoading, isAuthenticated },
  // } = useContext(AuthContext)
  const isAuthenticated = true
  // if (authLoading) {
  //   return <SpinerLogin />
  // }
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />
}
export { ProtectedRoute, PublishRoute }
