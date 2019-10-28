import React from 'react';
import propTypes from "prop-types"

const TopNavigation = ({ showGameForm }) => (
  <div className="ui secondary pointing menu">
    <a href="/" className="item">
      react-ap
    </a>
    <a className="item" onClick={showGameForm}>
        <i className="icon plus"/>Add New Game
    </a>
  </div>
);
TopNavigation.propTypes ={
    showGameForm: propTypes.func.isRequired
}
export default TopNavigation;
