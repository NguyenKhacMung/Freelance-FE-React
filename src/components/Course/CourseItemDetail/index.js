import React, { useEffect, useState } from 'react'
import './style.scss'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { BaseButton, ImageComponent } from '../../BaseComponent'
import { getCourseById, postComment } from '../../../store/reducers/courses';
import { courseDetailSelector } from '../../../store/selectors';
import ShowListComment from '../../ShowListComment';
import { Card, CardBody, CardHeader, ListGroup } from 'reactstrap';

const CourseItemDetail = ({ onClick }) => {
  const { courseId } = useParams();
  const [comment, setComment] = useState('');
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

  const onSubmitComment = async (e) => {
    e.preventDefault()
    try {
      unwrapResult(await dispatch(postComment({ text: comment, courseId })));
      getCourseDetail()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="content mb-5">
        <Card>
          <CardBody>
            <ListGroup>
              <div className="content-img">
                <ImageComponent src={courseDetail ? courseDetail.imgPreview : ''} className="rounded float-start" />
              </div>
              <div className="content-title mt-3">
                <h2>{courseDetail.name}</h2>
                <p>
                  {courseDetail.description}
                </p>
              </div>
            </ListGroup>
          </CardBody>
        </Card>
      </div>
      <ShowListComment comments={courseDetail.comments} />
      <div className="contact-form lession-comment mt-5">
        <h4>Leave a Comment</h4>
        <form className="contact-form mt-3" onSubmit={onSubmitComment} >
          <div className="row">
            {/* <div className="col-md-6">
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
            </div> */}
            <div className="col-md-12 mt-1">
              <div className="form-group">
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Your Comment *"
                  rows={4}
                  className="form-control"
                  onChange={e => setComment(e.target.value)}
                  defaultValue={comment}
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