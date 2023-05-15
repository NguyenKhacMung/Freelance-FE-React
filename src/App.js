import './App.scss';
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Register } from './views';
// import { ProtectedRoute, PublishRoute } from './routing';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route element={<PublishRoute />}> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* </Route> */}
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path='/' element={<Home />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
