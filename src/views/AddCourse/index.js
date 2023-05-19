import React, { useEffect, useState } from 'react'
import './style.scss'
import { FormGroup, Input, Label, Table } from 'reactstrap'
import { BaseButton, BaseLink, BaseModel, ImageComponent } from '../../components/BaseComponent'
import { deleteCourse, getAllCourses, postCourse } from '../../store/reducers/courses'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { coursesDataSelector, userIdSelector } from '../../store/selectors'

const AddCourse = () => {
  const userId = useSelector(userIdSelector);
  const courseData = useSelector(coursesDataSelector);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [dataAddCourse, setDataAddCourse] = useState({
    name: '',
    description: '',
    imgPreview: '',
  })

  const toggle = () => setShowModal(!showModal);
  const { name, description, imgPreview } = dataAddCourse
  const onOpened = (e) => {
    // console.log('cccc', e);
  }
  const onChange = (e) => {
    const { id, value } = e.target
    setDataAddCourse((pre) => ({ ...pre, [id]: value }))
  }

  useEffect(() => {
    getCourses()
  }, [])

  const getCourses = async () => {
    try {
      unwrapResult(await dispatch(getAllCourses()));
    } catch (error) {
      console.log(error);
    }
  }

  const okAction = async () => {
    try {
      const courseData = unwrapResult(await dispatch(postCourse({ name, description, imgPreview, userId, level: '1' })));
      if (courseData) {
        getCourses()
        toggle()
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onDelete = async (courseId) => {
    try {
      unwrapResult(await dispatch(deleteCourse({ courseId })));
      getCourses()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container add-course mt-3">
      <div className="d-flex justify-content-between align-items-center" >
        <BaseLink outline color="secondary" to="/" >{'<- Back'}</BaseLink>
        <BaseButton onClick={toggle}>Add Course</BaseButton>
      </div>
      <BaseModel title="Add Course" isOpen={showModal} toggle={toggle} onAction={okAction} onOpened={onOpened}>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            value={name}
            onChange={onChange}
            id="name"
            name="name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">
            Description
          </Label>
          <Input
            value={description}
            onChange={onChange}
            id="description"
            name="description"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="imgPreview">
            Image
          </Label>
          <Input
            value={imgPreview}
            onChange={onChange}
            id="imgPreview"
            name="imgPreview"
            type="text"
          />
        </FormGroup>
      </BaseModel>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th className="col-md-1">Image</th>
            <th className="col-md-2">Name</th>
            <th className="col-md-6">Description</th>
            <th>Action</th><th></th>
          </tr>
        </thead>
        <tbody>
          {(courseData.content || []).map((course, index) => <tr key={course.id}>
            <th scope="row">{index}</th>
            <td>
              <ImageComponent src={course.imgPreview} className="rounded float-start" />
            </td>
            <td>{course.name}</td>
            <td>{course.description}</td>
            <td width="150px"><BaseLink to={`/course/${course.id}/addVideo`}>Add Video</BaseLink></td>
            <td><BaseButton id={course.id} onClick={() => onDelete(course.id)} color="danger">Delete</BaseButton></td>
          </tr>)
          }

        </tbody>
      </Table>
    </div>
  )
}

export default AddCourse