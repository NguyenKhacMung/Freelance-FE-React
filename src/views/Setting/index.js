import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BaseButton, BaseLink } from '../../components'
import { userDataSelector } from '../../store/selectors'
import './style.scss'
import { handleUpdateUser } from '../../store/reducers'
import { unwrapResult } from '@reduxjs/toolkit'

const Setting = () => {
  const userData = useSelector(userDataSelector)
  const [userInput, setUserInput] = useState({
    username: userData.username,
    email: userData.email,
  })
  const dispatch = useDispatch();
  const { username, email } = userInput

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      unwrapResult(await dispatch(handleUpdateUser({ username, email })));
    } catch (error) {
      console.log(error);
    }
  }

  const onChange = (e) => {
    const { id, value } = e.target
    setUserInput((pre) => ({ ...pre, [id]: value }))
  }
  return (
    <div className="wrapper bg-white mt-sm-5">
      <h4 className="pb-4 border-bottom">Account Information</h4>
      <div className="py-2">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="bg-light form-control"
              id='username'
              value={username}
              onChange={onChange}
            />
          </div>
          <div className='mt-3'>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              className="bg-light form-control"
              id='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="py-3 d-flex justify-content-between">
            <BaseButton className="mr-3">Save Changes</BaseButton>
            <BaseLink color="secondary" outline to="/">Cancel</BaseLink>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Setting