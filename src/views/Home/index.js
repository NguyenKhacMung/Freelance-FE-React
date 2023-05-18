import React, { useEffect } from 'react'
import './style.scss'
import { CourseItem } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { getAllCourses } from '../../store/reducers/courses'
import { coursesDataSelector } from '../../store/selectors'

const Home = () => {
  const courseData = useSelector(coursesDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getCourses()
  }, [])

  const getCourses = async () => {
    try {
      unwrapResult(await dispatch(getAllCourses()));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container mt-4">
      <div className="course-section">
        {/* <h1>English</h1> */}
        <div className="list-course row">
          {(courseData.content || []).map(course => <CourseItem
            key={course.id}
            id={course.id}
            name={course.name}
            description={course.description}
            image={course.imgPreview}
          />)}
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