import React, { useState } from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const CustomPagination = ({ currentPage, pageSize, setPageSize, setCurrentPage, courseData }) => {
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
    const lastPage = Math.ceil(courseData.totalElements / newPageSize) - 1;
    setCurrentPage(Math.min(currentPage, lastPage));
    setDropdownOpen(false);
  };

  return (
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
  );
};

export default CustomPagination;
