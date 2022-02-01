import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({id, title, url}) => {
  return (<div className="card">
      <img src={url} alt={title}></img>
      <p className="animate__animated animate__bounce">{title}</p>
  </div>);
};


GifGridItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};