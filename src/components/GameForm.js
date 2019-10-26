import React, { Component } from 'react';

class GameForm extends Component {
    state= {
        name: "",
        description: ""
    }
  handleSumbit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = e => this.setState({[e.target.name]: e.target.value });

//   handleNameChange= e => this.setState({ name: e.target.value})
//   handleDescriptionChange= e => this.setState({ description: e.target.value})
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
          </div>
          <button className="ui button" type="submit">
            Create
          </button>
      </form>
    );
  }
}

export default GameForm;
