import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './style.scss'
import { BaseButton, ImageComponent } from '../../BaseComponent'
import { getCourseById } from '../../../store/reducers/courses';
import { courseDetailSelector } from '../../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

const CourseItemDetail = ({ onClick }) => {
  const { courseId } = useParams();
  const courseDetail = useSelector(courseDetailSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getCourseDetail()
    console.log('courseDetail', courseDetail);
  }, [courseId])


  const getCourseDetail = async () => {
    try {
      unwrapResult(await dispatch(getCourseById({ courseId })));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="content">
        <div className="content-img">
          <ImageComponent src={courseDetail.imgPreview} className="rounded float-start" />
        </div>
        <div className="content-title mt-3">
          <h2>{courseDetail.name}</h2>
          <p>
            {courseDetail.description}
          </p>
        </div>
      </div>
      <div className="contact-form lession-comment mt-5">
        <h4>Leave a Reply</h4>
        <form className="contact-form mt-3" method="#" >
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="Name"
                  id="name"
                  placeholder="Name *"
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="Email"
                  id="email"
                  placeholder="Email *"
                  className="form-control"
                  type="email"
                />
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message *"
                  rows={4}
                  className="form-control"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="send mt-3">
              <BaseButton className="send" onClick={onClick} >Submit</BaseButton>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CourseItemDetail