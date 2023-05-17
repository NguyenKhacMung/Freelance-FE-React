import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom';
import { handleLogout } from '../../store/reducers';
import { useDispatch } from 'react-redux';

function BaseNav() {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(handleLogout())
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Course
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control rounded-pill me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Class
              </a>
            </li> */}
            <li className="nav-item">
              <Link to={'/addCourse'} className="nav-link">
                AddCourse
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/addVideo'} className="nav-link">
                AddVideo
              </Link>
            </li>
          </ul>
          {/* <Link to={'/login'} className='btn btn-outline-primary ms-2'>
            Sign in
          </Link>
          <Link to={'/register'} className='btn btn-outline-secondary ms-3'>
            Sign up
          </Link> */}
          <div class="user-profile ms-3">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                width={40}
                height={40}
                className="rounded-circle"
              />
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link to={'/setting'} className="dropdown-item">
                  Setting
                </Link>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => logout()}>
                  Logout {'->'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default BaseNav;