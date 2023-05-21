import React from 'react'
import './style.scss'
import { Link, useMatch } from 'react-router-dom';
import { handleLogout } from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { CustomLink } from '../BaseComponent';
import { coursesDataSelector, roleSelector } from '../../store/selectors';
import { searchCourses } from '../../store/reducers/courses';
import { unwrapResult } from '@reduxjs/toolkit';

function BaseNav() {
  const toMatch = useMatch("");
  const roleUser = useSelector(roleSelector);
  const courseData = useSelector(coursesDataSelector);
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(handleLogout())
  }
  const onSearch = async (e) => {
    try {
      unwrapResult(await dispatch(searchCourses({ name: e.target.value, currentPage: courseData.pageable.pageNumber, pageSize: courseData.pageable.pageSize })));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top">
      <div className="container">
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
          <ul className="navbar-nav mb-2 mb-lg-0">
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
                <CustomLink to={'updateCourse'} className="nav-link">
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
          {toMatch && <input
            className="search-input form-control rounded-pill me-2 mx-auto"
            type="search"
            placeholder="Search course"
            onChange={onSearch}
          />}
          <div className="user-profile ms-auto">
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
                <Link to={'/change-password'} className="dropdown-item">
                  Change password
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