import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideoById } from '../../../store/reducers/courses';
import { videoDetailSelector } from '../../../store/selectors';
import VideoPlayer from '../../VideoPlayer';
import './style.scss'

const VideoCourse = () => {
  const { videoId } = useParams();
  const videoDetail = useSelector(videoDetailSelector);
  const dispatch = useDispatch();
  console.log('videoDetail', videoDetail);
  useEffect(() => {
    getVideoDetail()
  }, [videoId])


  const getVideoDetail = async () => {
    try {
      unwrapResult(await dispatch(getVideoById({ videoId })));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="content">
      <div className="content-img">
        <VideoPlayer videoUrl={videoDetail.url} />
      </div>
      <h2 className="mt-3">{videoDetail.title}</h2>
    </div>
  )
}

export default VideoCourse