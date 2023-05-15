import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const { username, password, confirmPassword } = user

  const onChange = (e) => {
    const { id, value } = e.target
    setUser((pre) => ({ ...pre, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // try {
    //   if (password === confirmPassword) {
    //     const registerData = await registerUser(user)
    //     setError(registerData.message)
    //   } else {
    //     setError('Confirm password not match')
    //   }
    // } catch (error) {
    //   setError(error.message)
    // }
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
            <label htmlFor='username' className='form-label'>
              Enter your username or email address
            </label>
            <input
              type='text'
              className='form-control'
              id='username'
              placeholder='Username or email address'
              required
              value={username}
              onChange={onChange}
            />
          </div>
          <div className='password'>
            <label htmlFor='pass' className='form-label'>
              Enter your Password
            </label>
            <input
              type='text'
              className='form-control'
              id='password'
              placeholder='Password'
              required
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='password'>
            <label htmlFor='confirmPassword' className='form-label'>
              Enter your Repeat Password
            </label>
            <input
              type='text'
              className='form-control'
              id='confirmPassword'
              placeholder='Repeat Password'
              required
              value={confirmPassword}
              onChange={onChange}
            />
          </div>
          {/* {error && <ErrorUser error={error} />} */}
          <div className='sign text-end'>
            <button className='btn sign-in'>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
