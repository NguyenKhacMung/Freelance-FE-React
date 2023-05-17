import React from 'react'
import './style.scss'
import { CourseItem } from '../../components'

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="course-section">
        {/* <h1>English</h1> */}
        <div className="list-course row">
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </div>
      {/* <div className="course-section">
        <h1>Match</h1>
        <div className="list-course row">
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </div> */}
    </div>
  )
}

export default Home