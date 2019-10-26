import React from 'react';
import propTypes from 'prop-types';

const Featured = ({ featured, toggleFeatured, gameId }) => (
  <span>
    {featured ? (
      <a
        onClick={() => toggleFeatured(gameId)}
        className="ui right yellow corner label"
      >
        <i className="star icon"></i>
      </a>
    ) : (
      <a
        onClick={() => toggleFeatured(gameId)}
        className="ui right corner label"
      >
        <i className="empty star icon"></i>
      </a>
    )}
  </span>
);

Featured.propTypes = {
  featured: propTypes.bool.isRequired,
  toggleFeatured: propTypes.func.isRequired,
  gameId: propTypes.number.isRequired,
};

export default Featured;

