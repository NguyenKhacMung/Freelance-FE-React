import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Layout } from '../components';
import { Home, Login, Register, Detail } from '../views';

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

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/detail' element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<PrivateRoute component={Home} />} />
      <Route path="/login" element={<PublicRoute component={Login} />} /> */}
        {/* <Route element={<PublishRoute />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path='/' element={<Home />} />
      </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
