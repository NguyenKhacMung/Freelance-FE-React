import React, { useEffect, useState } from 'react'
import './style.scss'
import { CourseItem } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { getAllCourses } from '../../store/reducers/courses'
import { coursesDataSelector } from '../../store/selectors'
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber - 1)
  };

  const handleNextPage = () => {
    if (currentPage < courseData.totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLastPage = () => {
    setCurrentPage(courseData.totalPages - 1);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setDropdownOpen(false);
  };
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
      <Pagination className="d-flex justify-content-center mt-4">
        <PaginationItem disabled={currentPage === 0}>
          <PaginationLink
            first
            onClick={handlePrevPage}
          />
        </PaginationItem>
        {Array.from({ length: courseData.totalPages }, (_, index) => (
          <PaginationItem
            key={index}
            active={courseData.pageable.pageNumber === index}
            onClick={() => handlePageChange(index + 1)}
          >
            <PaginationLink>{index + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === courseData.totalPages - 1}>
          <PaginationLink
            next
            onClick={handleNextPage}
          />
        </PaginationItem>
        <PaginationItem disabled={currentPage === courseData.totalPages - 1}>
          <PaginationLink
            last
            onClick={handleLastPage}
          />
        </PaginationItem>
        <PaginationItem>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
              Size: {pageSize}
            </DropdownToggle>
            <DropdownMenu>
              {Array.from(Array(courseData.totalElements).keys()).map((option) => (
                <DropdownItem active={option + 1 === pageSize} key={option} onClick={() => handlePageSizeChange(option + 1)}>
                  {option + 1}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </ButtonDropdown>
        </PaginationItem>
      </Pagination>
    </div>
  )
}

export default Home