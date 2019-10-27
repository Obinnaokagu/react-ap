import React, { Component } from 'react';

class GameForm extends Component {
  state = {
    name: '',
    description: '',
    price: 0,
    duration: 0,
    players: '',
  };
  handleSumbit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleStringChange = e =>
    this.setState({ [e.target.name]: e.target.value });
    handleNumberChange = e => this.setState({ [e.target.name]: parseInt(e.target.value, 10) });

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSumbit}>
        <div className="field">
          <label htmlFor="name">Game Title</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full game title"
            value={this.state.name}
            onChange={this.handleStringChange}
          />
        </div>

        <div className="field">
          <label htmlFor="description">Game description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Game description"
            value={this.state.description}
            onChange={this.handleStringChange}
          />
        </div>

        <div className="three fields">
          <div className="field">
            <label htmlFor="price">price(in cents)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={this.state.price}
              onChange={this.handleNumberChange}
            />
          </div>
          <div className="field">
            <label htmlFor="duration">Duration(in min)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={this.state.duration}
              onChange={this.handleNumberChange}
            />
          </div>
          <div className="field">
            <label htmlFor="players">players</label>
            <input
              type="text"
              id="players"
              name="players"
              value={this.state.players}
              onChange={this.handleStringChange}
            />
          </div>
        </div>
        
        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default GameForm;
