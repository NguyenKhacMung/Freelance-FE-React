import React, { useState } from 'react';
import { Card, CardImg } from 'reactstrap';
import defaultImage from '../../../assets/images/courseImage.jpg';

export const ImageComponent = ({ src, defaultSrc = defaultImage, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageError = (e) => {
    console.log(e);
    setImageSrc(defaultSrc);
  };

  return <Card>
    <CardImg src={imageSrc} onError={handleImageError}  {...props} />
  </Card>;
};
