import React from 'react'
import { BtnLinkOutline, BtnPrimary } from '../../components'
import './style.scss'

const Profile = () => {
  return (
    <div className="wrapper bg-white mt-sm-5">
      <h4 className="pb-4 border-bottom">Account settings</h4>
      <div className="py-2">
        <div className="row py-2">
          <div className="col-md-6">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="bg-light form-control"
              placeholder="Steve"
            />
          </div>
          <div className="col-md-6 pt-md-0 pt-3">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="bg-light form-control"
              placeholder="Smith"
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              className="bg-light form-control"
              placeholder="steve_@email.com"
            />
          </div>
          <div className="col-md-6 pt-md-0 pt-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="bg-light form-control"
              placeholder="+1 213-548-6015"
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6">
            <label htmlFor="country">Country</label>
            <select name="country" id="country" className="bg-light">
              <option value="india" selected="">
                India
              </option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="uae">UAE</option>
            </select>
          </div>
          <div className="col-md-6 pt-md-0 pt-3" id="lang">
            <label htmlFor="language">Language</label>
            <div className="arrow">
              <select name="language" id="language" className="bg-light">
                <option value="english" selected="">
                  English
                </option>
                <option value="english_us">English (United States)</option>
                <option value="enguk">English UK</option>
                <option value="arab">Arabic</option>
              </select>
            </div>
          </div>
        </div>
        <div className="py-3 pb-4 d-flex">
          <BtnPrimary className="mr-3" text="Save Changes" />
          <BtnLinkOutline path="/" className=" ms-auto" text="Cancel" />
        </div>
      </div>
    </div>

  )
}

export default Profile