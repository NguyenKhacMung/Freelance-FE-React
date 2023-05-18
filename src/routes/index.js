import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { CourseItemDetail, Layout, VideoCourse } from '../components';
import { isAuthenticatedSelector } from '../store/selectors';
import { Home, Login, Register, Course, Setting, AddCourse, AddVideo } from '../views';
// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';

const PrivateRoute = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const PublicRoute = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />
}

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <PrivateRoute path="/login" element={<Login />} />
        <PrivateRoute path='/register' element={<Register />} />
        <PrivateRoute path='/profile' element={<Profile />} />
        <PublicRoute path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/detail' element={<DetailCourse />} />
        </PublicRoute> */}
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path='course' element={<Course />}>
              <Route path=':courseId' element={<CourseItemDetail />} />
              <Route path=':courseId/videoCourse' element={<VideoCourse />} />
            </Route>
            <Route path='addCourse' element={<AddCourse />} />
            <Route path='course/:courseId/addVideo' element={<AddVideo />} />
          </Route>
          <Route path='/setting' element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
