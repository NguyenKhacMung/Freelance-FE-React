import React from 'react'
import { useSelector } from 'react-redux'
import { BaseButton, BaseLink } from '../../components'
import { userDataSelector } from '../../store/selectors'
import './style.scss'

const Setting = () => {
  const userData = useSelector(userDataSelector)
  return (
    <div className="wrapper bg-white mt-sm-5">
      <h4 className="pb-4 border-bottom">Account Information</h4>
      <div className="py-2">
        <div>
            <label htmlFor="firstname">Username</label>
            <input
              type="text"
              className="bg-light form-control"
              value={userData.username}
            />
        </div>
        <div className='mt-3'>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              className="bg-light form-control"
              value={userData.email}
            />
        </div>
        <div className="py-3 d-flex justify-content-between">
          {/* <BaseButton className="mr-3">Save Changes</BaseButton> */}
          <BaseLink color="secondary" outline to="/">Cancel</BaseLink>
        </div>
      </div>
    </div>

  )
}

export default Setting