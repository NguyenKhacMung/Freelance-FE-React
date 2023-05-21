import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BaseButton, BaseLink } from '../../components'
import './style.scss'
import { handleChangePassword, handleErrorChangePassword } from '../../store/reducers'
import { unwrapResult } from '@reduxjs/toolkit'
import ErrorDisplay from '../../components/BaseErrorDisplay'
import { userDataSelector } from '../../store/selectors'

const ChangePassword = () => {
  const userData = useSelector(userDataSelector)
  const [userInput, setUserInput] = useState({
    oldPass: '',
    newPass: '',
    confirmPassword: '',
  })
  const dispatch = useDispatch();
  const { oldPass, newPass, confirmPassword } = userInput

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newPass === confirmPassword) {
      try {
        unwrapResult(await dispatch(handleChangePassword({ oldPass, newPass, id: userData.id })));
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(handleErrorChangePassword('Confirm password not match'))
    }
  }

  const onChange = (e) => {
    const { id, value } = e.target
    setUserInput((pre) => ({ ...pre, [id]: value }))
  }
  return (
    <div className="wrapper bg-white mt-sm-5">
      <h4 className="pb-4 border-bottom">Change password</h4>
      <div className="py-2">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="oldPass">Old password</label>
            <input
              type="password"
              className="bg-light form-control"
              id='oldPass'
              value={oldPass}
              onChange={onChange}
              required
            />
          </div>
          <div className='mt-3'>
            <label htmlFor="newPass">New Password</label>
            <input
              type="password"
              className="bg-light form-control"
              id='newPass'
              value={newPass}
              onChange={onChange}
              required
            />
          </div>
          <div className='mt-3'>
            <label htmlFor="confirmPassword">Repeat Password</label>
            <input
              type="password"
              className="bg-light form-control"
              id='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
              required
            />
          </div>
          <ErrorDisplay errorKey="errorChangePassword" />
          <div className="py-3 d-flex justify-content-between">
            <BaseButton className="mr-3">Save Changes</BaseButton>
            <BaseLink color="secondary" outline to="/">Cancel</BaseLink>
          </div>
        </form>
      </div>
    </div>

  )
}

export default ChangePassword