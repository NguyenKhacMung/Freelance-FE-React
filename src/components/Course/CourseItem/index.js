import React from 'react'
import { BaseLink } from '../../BaseComponent/BaseLink'
import './style.scss'

const CourseItem = () => {
  return (
    <div className="course-item col-md-3 mb-4">
      <div className="card">
        <img src="https://media.istockphoto.com/id/1160214744/vi/anh/s%C3%A1ch-gi%C3%A1o-khoa-trong-ba-l%C3%B4-tr%C6%B0%E1%BB%9Dng-h%E1%BB%8Dc-kh%C3%A1i-ni%E1%BB%87m-gi%C3%A1o-d%E1%BB%A5c-l%E1%BA%A5y-n%C3%A9t-ch%E1%BB%8Dn-l%E1%BB%8Dc.jpg?s=1024x1024&w=is&k=20&c=9u-X7ZmCGEPaeX6nD81KR7Ig16jIY9TI4ePivIfGbLo=" className="card-img-top" alt="..." />
        <div className="card-body p-2">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title
          </p>
          <BaseLink to="/course">View</BaseLink>
        </div>
      </div>
    </div>
  )
}

export default CourseItem