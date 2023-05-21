import moment from 'moment';
import React from 'react';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';

const ShowListComment = ({ comments }) => {
  return (
    <Card>
      <CardHeader>Comments</CardHeader>
      <CardBody>
        {comments && comments.length === 0 ? (
          <p>No comments available.</p>
        ) : (
          <ListGroup>
            {(comments || []).map((comment) => (
              <ListGroupItem key={comment.id}>
                <div>
                  <strong>Anonymous</strong>
                  <p>{comment.text}</p>
                  <small>{`Created time: ${moment(comment.createdTime).fromNow()}`}</small>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </CardBody>
    </Card>
  );
};

export default ShowListComment;
