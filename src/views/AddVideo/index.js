import React, { useState } from 'react'
import './style.scss'
import { FormGroup, Input, Label, Table } from 'reactstrap'
import { BaseButton, BaseLink, BaseModel } from '../../components/BaseComponent'

const AddCourse = () => {
  const [showModal, setShowModal] = useState(false);
  const [dataAddCourse, setDataAddCourse] = useState({
    name: '',
    title: '',
    url: '',
  })

  const toggle = () => setShowModal(!showModal);
  const { name, title, url } = dataAddCourse
  const onOpened = (e) => {
    // console.log('cccc', e);
  }
  const onChange = (e) => {
    const { id, value } = e.target
    setDataAddCourse((pre) => ({ ...pre, [id]: value }))
  }
  return (
    <div className="container add-course mt-3">
      <div className="text-end" >
        <BaseButton onClick={toggle}>Add Video</BaseButton>
        <BaseModel title="Add Course" isOpen={showModal} toggle={toggle} onAction={toggle} onOpened={onOpened}>
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
            <th>Name</th>
            <th>Title</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img src="https://media.istockphoto.com/id/1160214744/vi/anh/s%C3%A1ch-gi%C3%A1o-khoa-trong-ba-l%C3%B4-tr%C6%B0%E1%BB%9Dng-h%E1%BB%8Dc-kh%C3%A1i-ni%E1%BB%87m-gi%C3%A1o-d%E1%BB%A5c-l%E1%BA%A5y-n%C3%A9t-ch%E1%BB%8Dn-l%E1%BB%8Dc.jpg?s=1024x1024&w=is&k=20&c=9u-X7ZmCGEPaeX6nD81KR7Ig16jIY9TI4ePivIfGbLo=" className="rounded float-start" alt="..." />
            </td>
            <td>Mark ffg fghfhfgfg fgh fgh fhf fgh hfgh dgdfdgdgdgdgdf  </td>
            <td>Otto  ffg fghfhfgfg fgh fgh fhf fgh hfgh dgdfdgdgdgd</td>
            <td><BaseButton>Delete</BaseButton></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AddCourse