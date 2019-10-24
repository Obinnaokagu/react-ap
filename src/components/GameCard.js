import React from 'react';
import Featured from './Featured';
import propTypes from 'prop-types';

const GameCard = ({ game }) => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">
        ${game.price}
        {game.price < 4000 && '!'}
      </span>
      <Featured Featured={game.Featured} />
      <img src={game.thumbnail} alt="GameCover" />
    </div>
    <div className="content">
      <a className="header">{game.name}</a>
      <div className="meta">
        <i className="icon users"></i> {game.players}&nbsp;
        <i className="icon wait"></i> {game.duration} min.
      </div>
    </div>
  </div>
);

GameCard.prototypes = {
  game: propTypes.shape({
    name: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    players: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    duration: propTypes.number.isRequired,
    featured: propTypes.bool.isRequired,
  }).isRequired,
};

export default GameCard;
