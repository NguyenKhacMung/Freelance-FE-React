import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-md-4 col-xl-5">
              <div className="Warehouse">
                <h1 className="title-footer">Online Course</h1>
                <h2 className="location">
                  Viet Nam
                </h2>
                <p className="infor">
                  course@123456.com.vn
                  <br />
                  000-000-000
                </p>
              </div>
            </div>
            <div className="col-md-8 col-xl-7">
              <div className="row">
                <div className="col-md-6">
                  <ul className="about">
                    <li className="about-item">
                      <a className="footer-link title" href="#">
                        About
                      </a>
                    </li>
                    <li className="about-item">
                      <a className="footer-link" href="#">
                        Profile
                      </a>
                    </li>
                    <li className="about-item">
                      <a className="footer-link" href="#">
                        AddCourse
                      </a>
                    </li>
                    <li className="about-item">
                      <a className="footer-link" href="#">
                        AddVideo
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="help">
                    <li className="help-item">
                      <a className="footer-link title" href="#">
                        Help
                      </a>
                    </li>
                    <li className="help-item">
                      {" "}
                      <a className="footer-link" href="#">
                        Support
                      </a>
                    </li>
                    <li className="help-item">
                      <a className="footer-link" href="#">
                        Q&amp;A
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-5">
            © OnlineCourse™, 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer