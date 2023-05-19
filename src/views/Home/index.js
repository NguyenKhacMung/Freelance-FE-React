import React, { useEffect, useState } from 'react'
import './style.scss'
import { CourseItem } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { getAllCourses } from '../../store/reducers/courses'
import { coursesDataSelector } from '../../store/selectors'
import CustomPagination from '../../components/CustomPagination'

const Home = () => {
  const courseData = useSelector(coursesDataSelector);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSize, setPageSize] = useState(4)

  useEffect(() => {
    getCourses()
  }, [currentPage, pageSize])
  console.log('currentPage', currentPage);
  const getCourses = async () => {
    try {
      unwrapResult(await dispatch(getAllCourses({ currentPage, pageSize })));
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
      <CustomPagination pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage} setPageSize={setPageSize} courseData={courseData} />
    </div>
  )
}

export default Home