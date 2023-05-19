import React from 'react'
import { BaseLink } from '../../BaseComponent/BaseLink'
import './style.scss'
import { ImageComponent } from '../../BaseComponent'

const CourseItem = ({ id, name, description, image }) => {
  return (
    <div className="course-item col-md-3 mb-4">
      <div className="card h-100">
        <ImageComponent src={image} className="card-img-top course-image" alt={name} />
        <div className="card-body p-2 d-flex flex-column">
          <h5 className="card-title course-title">{name}</h5>
          <p className="card-text course-description">
            {description}
          </p>
          <BaseLink to={`/course/${id}`} className="mt-auto">View</BaseLink>
        </div>
      </div>
    </div>
  )
}

export default CourseItem