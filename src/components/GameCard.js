import React from 'react';

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

export default GameCard;
