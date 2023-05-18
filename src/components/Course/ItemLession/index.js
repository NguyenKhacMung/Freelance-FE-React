import React from 'react'
import './style.scss'
import { ImageComponent } from '../../BaseComponent'
import moment from 'moment/moment'

const ItemLession = ({ onClick, video }) => {
  return (
    <div className="item-lession card mb-3" style={{ maxWidth: 540 }} onClick={onClick}>
      <div className="row g-0">
        <div className="col-md-4">
          <ImageComponent src={video.imgPreview} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{video.title}</h5>
            <p className="card-text text-lession">
              {video.duration}
            </p>
            <p className="card-text">
              <small className="text-muted">{`Created time: ${moment(video.createdTime).fromNow()}`}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemLession