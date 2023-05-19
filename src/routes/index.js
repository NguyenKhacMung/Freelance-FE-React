import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { CourseItemDetail, Layout, VideoCourse } from '../components';
import { isAuthenticatedSelector } from '../store/selectors';
import { Home, Login, Register, Course, Setting, AddCourse, AddVideo } from '../views';

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
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path='course' element={<Course />}>
              <Route path=':courseId' element={<CourseItemDetail />} />
              <Route path=':courseId/videoCourse/:videoId' element={<VideoCourse />} />
            </Route>
            <Route path='updateCourse' element={<AddCourse />} />
            <Route path='course/:courseId/addVideo' element={<AddVideo />} />
          </Route>
          <Route path='/profile' element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
