import React from 'react'
import { BaseButton } from '../../BaseComponent'
import './style.scss'

const CourseItemDetail = ({ onClick }) => {
  return (
    <>
      <div className="content">
        <div className="content-img">
          <img
            src="https://www.bootdey.com/image/800x350/87CEFA/000000"
            title=""
            alt=""
          />
        </div>
        <div className="content-title mt-3">
          <h2>They Now Bade Farewell To The Kind But Unseen People</h2>
          <p>
            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
            dolor pretium donec dictum. Vici consequat justo enim. Venenatis
            eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem
            libero tellus viverra venenatis aliquam. Commodo natoque quam
            pulvinar elit.
          </p>
          <p>
            Eget aenean tellus venenatis. Donec odio tempus. Felis arcu
            pretium metus nullam quam aenean sociis quis sem neque vici
            libero. Venenatis nullam fringilla pretium magnis aliquam nunc
            vulputate integer augue ultricies cras. Eget viverra feugiat cras
            ut. Sit natoque montes tempus ligula eget vitae pede rhoncus
            maecenas consectetuer commodo condimentum aenean.
          </p>
        </div>
      </div>
      <div className="contact-form lession-comment mt-5">
        <h4>Leave a Reply</h4>
        <form class="contact-form mt-3" method="#" onSubmit={{}}>
          <div className="row">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-12 mt-3">
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message *"
                  rows={4}
                  className="form-control"
                  defaultValue={""}
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