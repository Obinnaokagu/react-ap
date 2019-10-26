import React from 'react';
import propTypes from 'prop-types'
import GameCard from './GameCard';

const GamesList = ({ games, toggleFeatured }) => (
    <div className="ui four cards">
        {
            games.length === 0 ? (
                <div className='ui icon message'>
                    <i className='icon info'></i>
                    <div className='content'>
                        <div className='header'>There are no game in your store!</div>
                        <p>You should add some, don't you think?</p>
                    </div>
                </div>

            ) :(
                games.map(eachGame => <GameCard game={eachGame} key={eachGame._id} toggleFeatured={toggleFeatured} />)
            )  
        }
    </div>
)

GamesList.propTypes ={
    game: propTypes.arrayOf(propTypes.object).isRequired
};
GamesList.defaultProps={
    games: []
};

export default GamesList;