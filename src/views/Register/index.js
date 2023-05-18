import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.scss'
import { useDispatch } from 'react-redux'
import { handleRegister } from '../../store/reducers'
import { unwrapResult } from '@reduxjs/toolkit'
import { ErrorUser } from '../../components/BaseError/ErrorUser'

const Register = () => {
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { username, email, password, confirmPassword } = userInput

  const onChange = (e) => {
    const { id, value } = e.target
    setUserInput((pre) => ({ ...pre, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      try {
        const registerData = unwrapResult(await dispatch(handleRegister({ username, password, email, role: 'user' })));
        if (registerData)
          navigate('/login')
      } catch (error) {
        if (error && error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message)
        } else {
          setError(error.message)
        }
      }
    } else {
      setError('Confirm password not match')
    }
  }

  return (
    <div className='main container-fluid'>
      <div className='container register d-flex justify-content-center justify-content-sm-end align-items-center'>
        <form onSubmit={handleSubmit}>
          <div className=' d-flex justify-content-between'>
            <p className='welcom'>
              Welcome to<span> Course</span>
            </p>
            <p className='no-account'>
              Have an Account ?
              <br />
              <Link to={'/login'} className='p2'>
                Sign in
              </Link>
            </p>
          </div>
          <div className='title'>Sign up</div>

          <div className='username'>
            <input
              type='text'
              className='form-control'
              id='username'
              placeholder='Username'
              required
              value={username}
              onChange={onChange}
            />
          </div>
          <div className='username'>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Email address'
              required
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='password'>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Password'
              required
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='password'>
            <input
              type='password'
              className='form-control'
              id='confirmPassword'
              placeholder='Repeat Password'
              required
              value={confirmPassword}
              onChange={onChange}
            />
          </div>
          {error && <ErrorUser error={error} />}
          <div className='sign text-end'>
            <button className='btn sign-in'>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
