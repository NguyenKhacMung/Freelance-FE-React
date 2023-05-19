import React from 'react';
import { useSelector } from 'react-redux';

const ErrorDisplay = ({ errorKey }) => {
  const error = useSelector(state => state.auth[errorKey]);


  if (!error) {
    return null;
  }

  return (
    <div className='invalid-feedback d-block mt-2'>{error}</div>
  );
};

export default ErrorDisplay;