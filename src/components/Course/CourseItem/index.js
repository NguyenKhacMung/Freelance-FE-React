import React from 'react'
import { BaseLink } from '../../BaseComponent/BaseLink'
import './style.scss'
import { ImageComponent } from '../../BaseComponent'

const CourseItem = ({ id, name, description, image }) => {
  return (
    <div className="course-item col-md-3 mb-4">
      <div className="card">
        <ImageComponent src={image} className="card-img-top" alt={name} />
        <div className="card-body p-2">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
          <BaseLink to={`/course/${id}`}>View</BaseLink>
        </div>
      </div>
    </div>
  )
}

export default CourseItem