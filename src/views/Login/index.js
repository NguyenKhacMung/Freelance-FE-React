import { unwrapResult } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleLogin } from '../../store/reducers'
import './login.scss'

const Login = () => {

  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')
  const dispatch = useDispatch();
  const { username, password } = userInput

  const onChange = (e) => {
    const { id, value } = e.target
    setUserInput((pre) => ({ ...pre, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userData = unwrapResult(await dispatch(handleLogin({ username, password })));
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='main container-fluid'>
      <div className='container login d-flex justify-content-center justify-content-sm-end align-items-center'>
        <form onSubmit={handleSubmit}>
          <div className=' d-flex justify-content-between'>
            <p className='welcom'>
              Welcome to<span> Course</span>
            </p>
            <p className='no-account'>
              No Account ?
              <br />
              <Link to={'/register'} className='p2'>
                Sign up
              </Link>
            </p>
          </div>
          <div className='title'>Sign in</div>
          <div className='username'>
            <label htmlFor='username' className='form-label'>
              Enter your username or email address
            </label>
            <input
              type='text'
              className='form-control'
              id='username'
              value={username}
              onChange={onChange}
              placeholder='Username or email address'
              required
            />
          </div>
          <div className='password'>
            <label htmlFor='password' className='form-label'>
              Enter your Password
            </label>
            <input
              type='text'
              className='form-control'
              id='password'
              value={password}
              onChange={onChange}
              placeholder='Password'
              required
            />
          </div>
          {/* {error && <ErrorUser error={error} />} */}
          <div className='sign text-end'>
            <button className='btn sign-in'>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
