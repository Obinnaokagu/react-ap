import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';

class GameForm extends Component {
  state = {
    name: '',
    description: '',
    price: 0,
    duration: 0,
    players: '',
    featured: false,
    publisher: 0,
    thumbnail: '',
  };
  handleSumbit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleStringChange = e => this.setState({ [e.target.name]: e.target.value });
  handleNumberChange = e =>
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });
  handleCheckboxChange = e =>
    this.setState({ [e.target.name]: e.target.checked });

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSumbit}>
        <div className="ui grid">
          <div className="twelve wide column">
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
          </div>
          <div className="four wide column">
            <ReactImageFallback
              src={this.state.thumbnail}
              alt="TThumbnail"
              fallbackImage="http://via.placeholder.com/250X250"
              className="ui image"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            placeholder="image URL"
            value={this.state.thumbnail}
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
        <div className="inline field">
          <input
            id="featured"
            name="featured"
            type="checkbox"
            checked={this.state.featured}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="faetured">featured?</label>
        </div>

        <div className="field">
          <label>publishers</label>
          <select
            name="publisher"
            value="this.state.publisher"
            onChange={this.handleNumberChange}
          >
            <option value="0">choose publisher</option>
            {this.props.publishers.map(publisher => (
              <option value={publisher._id} key={publisher._id}>
                {publisher.name}
              </option>
            ))}
          </select>
        </div>
        <div className="ui fluid buttons">
        <button className="ui primary button" type="submit">
          Create
        </button>
        <div className="or"></div>
        <a className="ui button" onClick={this.props.cancle}>Cancle</a>
        </div>
      </form>
    );
  }
}
GameForm.propTypes = {
  publishers: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.number.isRequried,
      name: propTypes.string.isRequired,
    }),
  ).isRequired,
  cancle: propTypes.func.isRequired
};
GameForm.defaultProps = {
  publishers: [],
};

export default GameForm;
