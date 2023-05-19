import React, { useState } from 'react';
import './style.scss'
import { Card, CardImg } from 'reactstrap';
import defaultImage from '../../../assets/images/courseImage.jpg';

export const ImageComponent = ({ src, defaultSrc = defaultImage, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageError = (e) => {
    console.log(e);
    setImageSrc(defaultSrc);
  };

  return <CardImg src={imageSrc} onError={handleImageError}  {...props} />
};
