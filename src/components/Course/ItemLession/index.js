import React from 'react'
import './style.scss'

const ItemLession = ({ onClick }) => {
  return (
    <div className="item-lession card mb-3" style={{ maxWidth: 540 }} onClick={onClick}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://media.istockphoto.com/id/1160214744/vi/anh/s%C3%A1ch-gi%C3%A1o-khoa-trong-ba-l%C3%B4-tr%C6%B0%E1%BB%9Dng-h%E1%BB%8Dc-kh%C3%A1i-ni%E1%BB%87m-gi%C3%A1o-d%E1%BB%A5c-l%E1%BA%A5y-n%C3%A9t-ch%E1%BB%8Dn-l%E1%BB%8Dc.jpg?s=1024x1024&w=is&k=20&c=9u-X7ZmCGEPaeX6nD81KR7Ig16jIY9TI4ePivIfGbLo=" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text text-lession">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemLession