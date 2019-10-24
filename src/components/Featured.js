import React from 'react';
import propTypes from 'prop-types';

const Featured = ({ Featured }) => (
  <span>
    {Featured ? (
      <a className="ui right yellow corner label">
        <i className="star icon"></i>
      </a>
    ) : (
      <a className="ui right corner label">
        <i className="empty star icon"></i>
      </a>
    )}
  </span>
);

Featured.propTypes = {
  featured: propTypes.bool.isRequired,
};

export default Featured;
