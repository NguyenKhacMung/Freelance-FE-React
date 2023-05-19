import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom';
import { handleLogout } from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { CustomLink } from '../BaseComponent';
import { roleSelector } from '../../store/selectors';

function BaseNav() {
  const roleUser = useSelector(roleSelector);
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(handleLogout())
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top">
      <div className="container-fluid">
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
              <CustomLink to={'/'} className="nav-link" aria-current="page">
                Home
              </CustomLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Class
              </a>
            </li> */}
            {
              roleUser.includes('ROLE_ADMIN') && <li className="nav-item">
                <CustomLink to={'addCourse'} className="nav-link">
                  Course
                </CustomLink>
              </li>
            }

            {/* <li className="nav-item">
              <Link to={'/addVideo'} className="nav-link">
                AddVideo
              </Link>
            </li> */}
          </ul>
          <div className="user-profile ms-3">
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
                <Link to={'/profile'} className="dropdown-item">
                  Profile
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