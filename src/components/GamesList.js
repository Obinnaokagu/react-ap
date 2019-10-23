import React from 'react';
import propTypes from 'prop-types'
import GameCard from './GameCard';

const GamesList = ({ games }) => (
    <div className="ui four cards">
        {games.map(game => <GameCard game={game} key={game._id}/>)};
    </div>
);
GamesList.propTypes ={
    game: propTypes.arrayOf(propTypes.object).isRequired
};

export default GamesList;