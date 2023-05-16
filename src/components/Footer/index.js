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
                  Warehouse Society, 234
                  <br />
                  Bahagia Ave Street PRBW 29281
                </h2>
                <p className="infor">
                  info@warehouse.project
                  <br />
                  1-232-3434 (Main)
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
                      {" "}
                      <a className="footer-link" href="#">
                        Profile
                      </a>
                    </li>
                    <li className="about-item">
                      <a className="footer-link" href="#">
                        Features
                      </a>
                    </li>
                    <li className="about-item">
                      <a className="footer-link" href="#">
                        Careers
                      </a>
                    </li>
                    <li className="about-item">
                      <a className="footer-link" href="#">
                        DW News
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
                        Sign up
                      </a>
                    </li>
                    <li className="help-item">
                      <a className="footer-link" href="#">
                        Guide
                      </a>
                    </li>
                    <li className="help-item">
                      <a className="footer-link" href="#">
                        Reports
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
            © Datawarehouse™, 2020. All rights reserved.
            Company Registration Number: 21479524.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer