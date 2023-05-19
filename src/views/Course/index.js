import React, { useEffect } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ItemLession, BaseButton } from '../../components'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '../../store/reducers/courses';
import { unwrapResult } from '@reduxjs/toolkit';
import { courseDetailSelector } from '../../store/selectors';

const Course = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { courseId } = useParams();
  const courseDetail = useSelector(courseDetailSelector);
  const dispatch = useDispatch();
  console.log('courseDetail', courseDetail);
  useEffect(() => {
    getCourseDetail()
  }, [])


  const getCourseDetail = async () => {
    try {
      unwrapResult(await dispatch(getCourseById({ courseId })));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='container lession-detail pt-3'>
      <BaseButton outline color="secondary" onClick={goBack} className="mb-3">{'<- Back'}</BaseButton>
      <div className='row'>
        <div className="col-md-8">
          <Outlet />
        </div>
        <div className="col-md-4 lession-list">
          <h3>List lession</h3>
          {(courseDetail.videos || []).map(video =>
            <ItemLession key={video.id} video={video} onClick={(videoId) => navigate(`${courseDetail.id}/videoCourse/${videoId}`)} />
          )}

        </div>
      </div>
    </div>
  )
}

export default Course