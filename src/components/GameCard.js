import React from 'react';
import propTypes from 'prop-types'

const GameCard = ({ game }) => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">${game.price}</span> 
      <img src={game.thumbnail} alt="GameCover" />
    </div>
    <div className="content">
        <a href="#" className='header'>{game.name}</a>
        <div className='meta'>
            <i className='icon users'></i> {game.players}&nbsp;
            <i className='icon wait'></i> {game.duration} min.
        </div>
    </div>
  </div>
);

GameCard.prototypes = {
  game: propTypes.shape ({
    name: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    players: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    duration: propTypes.number.isRequired,
  }).isRequired
};

export default GameCard;
