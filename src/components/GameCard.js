import React from 'react';

const GameCard = () => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">$35.99</span> 
      <img src="https://cf.geekdo-images.com/W9bbXs5FZwzLNlT5Pz6G-uV2Wek=/fit-in/1200x630/pic3251870.jpg" alt="GameCover" />
    </div>
    <div className="content">
        <a href="#" className='header'>Quadropolis</a>
        <div className='meta'>
            <i className='icon users'></i> 2-4&nbsp;
            <i className='icon wait'></i> 60 min.
        </div>
    </div>
  </div>
);

export default GameCard;
