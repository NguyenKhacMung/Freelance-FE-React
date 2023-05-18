import React, { useEffect, useState } from 'react'
import './style.scss'
import { FormGroup, Input, Label, Table } from 'reactstrap'
import { BaseButton, BaseModel, ImageComponent } from '../../components/BaseComponent'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { courseDetailSelector } from '../../store/selectors'
import { deleteVideo, getCourseById, postVideo } from '../../store/reducers/courses'
import { unwrapResult } from '@reduxjs/toolkit'

const AddCourse = () => {
  const { courseId } = useParams();
  const courseDetail = useSelector(courseDetailSelector);
  const dispatch = useDispatch();
  console.log('courseDetail', courseDetail);
  const [showModal, setShowModal] = useState(false);
  const [dataAddVideo, setDataAddVideo] = useState({
    title: '',
    imgPreview: '',
    url: '',
  })

  const toggle = () => setShowModal(!showModal);
  const { title, imgPreview, url } = dataAddVideo
  const onOpened = (e) => {
    // console.log('cccc', e);
  }
  const onChange = (e) => {
    const { id, value } = e.target
    setDataAddVideo((pre) => ({ ...pre, [id]: value }))
  }

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
  const okAction = async () => {
    try {
      const courseData = unwrapResult(await dispatch(postVideo({
        courseId,
        title,
        imgPreview,
        url,
      })));
      if (courseData) {
        getCourseDetail()
        toggle()
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onDelete = async (videoId) => {
    try {
      unwrapResult(await dispatch(deleteVideo({ videoId })));
      getCourseDetail()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container add-course mt-3">
      <div className="d-flex justify-content-between align-items-center" >
        <h1>{courseDetail.name}</h1>
        <div >
          <BaseButton onClick={toggle}>Add Video</BaseButton>
        </div>
        <BaseModel title="Add Video" isOpen={showModal} toggle={toggle} onAction={okAction} onOpened={onOpened}>
          <FormGroup>
            <Label for="title">
              Title
            </Label>
            <Input
              value={title}
              onChange={onChange}
              id="title"
              name="title"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="imgPreview">
              imgPreview
            </Label>
            <Input
              value={imgPreview}
              onChange={onChange}
              id="imgPreview"
              name="imgPreview"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="url">
              URL
            </Label>
            <Input
              value={url}
              onChange={onChange}
              id="url"
              name="url"
              type="text"
            />
          </FormGroup>
        </BaseModel>
      </div>
      <Table hover responsive>
        <thead>
          <tr>
            <th>STT</th>
            <th>Video</th>
            <th>Title</th>
            <th>Duration</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {(courseDetail.videos || []).map(video =>
          (<tr key={video.id}>
            <th scope="row">{video.id}</th>
            <td>
              <ImageComponent src={video.imgPreview} className="rounded float-start" />
            </td>

            <td>{video.title} </td>
            <td>{video.duration}</td>
            <td><BaseButton onClick={() => onDelete(video.id)}>Delete</BaseButton></td>
          </tr>)
          )}

        </tbody>
      </Table>
    </div>
  )
}

export default AddCourse