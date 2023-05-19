import { useState } from 'react'
import './login.scss'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleLogin } from '../../store/reducers'
import ErrorDisplay from '../../components/BaseErrorDisplay'

const Login = () => {
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
  })
  const dispatch = useDispatch();
  const { username, password } = userInput

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      unwrapResult(await dispatch(handleLogin({ username, password })));
    } catch (error) {
      console.log(error);
    }
  }
  
  const onChange = (e) => {
    const { id, value } = e.target
    setUserInput((pre) => ({ ...pre, [id]: value }))
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
              type='password'
              className='form-control'
              id='password'
              value={password}
              onChange={onChange}
              placeholder='Password'
              required
            />
          </div>
          <ErrorDisplay errorKey="errorLogin" />
          <div className='sign text-end'>
            <button className='btn sign-in'>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
