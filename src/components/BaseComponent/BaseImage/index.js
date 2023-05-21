import React, { useEffect, useState } from 'react';
import './style.scss'
import { CardImg } from 'reactstrap';
import defaultImage from '../../../assets/images/file-not-found.png';

export const ImageComponent = ({ src, defaultSrc = defaultImage, ...props }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    setImageSrc(src)
  }, [src])

  const handleImageError = (e) => {
    console.log(e);
    setImageSrc(defaultSrc);
  };

  return <CardImg src={imageSrc} onError={handleImageError}  {...props} />
};
