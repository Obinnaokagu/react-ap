import React, { Component } from 'react';

class GameForm extends Component {
    state= {
        name: ""
    }
  handleSumbit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  
  handleNameChange= e => this.setState({ name: e.target.value})
  render() {
    return (
      <form classNmae="ui form" onSubmit={this.handleSumbit}>
        <div className="field">
          <label htmlFor="name">Game Title</label>
          <input
            type="text"
            id="name"
            placeholder="Full game title"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <button className="ui button" type="submit">
            Create
          </button>
        </div>
      </form>
    );
  }
}

export default GameForm;
