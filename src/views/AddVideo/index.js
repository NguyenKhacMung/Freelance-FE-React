import React, { useEffect, useState } from 'react'
import './style.scss'
import { FormGroup, Input, Label, Table } from 'reactstrap'
import { BaseButton, BaseLink, BaseModel, ImageComponent } from '../../components/BaseComponent'
import { useNavigate, useParams } from 'react-router-dom'
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
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
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
  const okAction = async (e) => {
    e.preventDefault();
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
        setDataAddVideo({
          title: '',
          imgPreview: '',
          url: '',
        })
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
        <BaseButton outline color="secondary" onClick={goBack} >{'<- Back'}</BaseButton>
        <BaseButton onClick={toggle}>Add Video</BaseButton>
      </div>
      <h3 className='mt-2'>Course name: {courseDetail.name}</h3>
      <form>
        <BaseModel title="Add Video" isOpen={showModal} toggle={toggle} onAction={okAction} onOpened={onOpened}>
          <FormGroup onSubmit={okAction}>
            <Label for="title">
              Title
            </Label>
            <Input
              value={title}
              onChange={onChange}
              id="title"
              name="title"
              type="text"
              required
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
              required
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
              required
            />
          </FormGroup>
        </BaseModel>
      </form>
      <Table hover responsive>
        <thead>
          <tr>
            <th>STT</th>
            <th className="col-md-2">Video</th>
            <th className="col-md-10">Title</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {(courseDetail.videos || []).map((video, index) =>
          (<tr key={video.id}>
            <th scope="row">{index}</th>
            <td>
              <ImageComponent src={video.imgPreview} className="rounded float-start" />
            </td>

            <td>{video.title} </td>
            <td><BaseButton onClick={() => onDelete(video.id)} color="danger">Delete</BaseButton></td>
          </tr>)
          )}

        </tbody>
      </Table>
    </div>
  )
}

export default AddCourse