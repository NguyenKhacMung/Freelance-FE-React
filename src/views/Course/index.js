import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { ItemLession, BaseButton } from '../../components'
import './style.scss'

const Course = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const navigateReplace = (to) => {
    navigate(to, { replace: true })
  };
  return (
    <div className='container lession-detail pt-3'>
      <BaseButton outline color="secondary" onClick={goBack} className="mb-3">{'<- Back'}</BaseButton>
      <div className='row'>
        <div className="col-md-8">
          <Outlet />
        </div>
        <div className="col-md-4 lession-list">
          <h3>List lession</h3>
          <ItemLession onClick={() => navigateReplace("/course/videoCourse")} />
          <ItemLession onClick={() => navigateReplace("/course/videoCourse")} />
          <ItemLession onClick={() => navigateReplace("/course/videoCourse")} />
          <ItemLession onClick={() => navigateReplace("/course/videoCourse")} />
          <ItemLession onClick={() => navigateReplace("/course/videoCourse")} />
          <ItemLession onClick={() => navigateReplace("/course/videoCourse")} />
          <ItemLession onClick={() => navigateReplace("/course/videoCourse")} />
          <ItemLession onClick={() => navigateReplace("/course/videoCourse")} />
        </div>
      </div>
    </div>
  )
}

export default Course