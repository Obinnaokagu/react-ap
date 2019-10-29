import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';
import FormInLineMessage from './FormInlineMessage';

class GameForm extends Component {
  state = {
    data: {
      name: '',
      description: '',
      price: 0,
      duration: 0,
      players: '',
      featured: false,
      publisher: 0,
      thumbnail: '',
    },
    errors: {},
  };
  handleSumbit = e => {
    e.preventDefault();
    console.log(this.state.data);
  };
  handleStringChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  handleNumberChange = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value, 10),
      },
    });
  handleCheckboxChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.checked },
    });

  render() {
    const { data, errors } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleSumbit}>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className={errors.name ? 'field error' : 'field'}>
              <label htmlFor="name">Game Title</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full game title"
                value={data.name}
                onChange={this.handleStringChange}
              />
              <FormInLineMessage content={errors.name} type="error" />
            </div>

            <div className={errors.description ? 'field error' : 'field'}>
              <label htmlFor="description">Game description</label>
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="Game description"
                value={data.description}
                onChange={this.handleStringChange}
              />
              <FormInLineMessage content={errors.description} type="error" />
            </div>
          </div>
          <div className="four wide column">
            <ReactImageFallback
              src={data.thumbnail}
              alt="TThumbnail"
              fallbackImage="http://via.placeholder.com/250X250"
              className="ui image"
            />
          </div>
        </div>

        <div className={errors.thumbnail ? 'field error' : 'field'}>
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            placeholder="image URL"
            value={data.thumbnail}
            onChange={this.handleStringChange}
          />
          <FormInLineMessage content={errors.thumbnail} type="error" />
        </div>

        <div className="three fields">
          <div className={errors.price ? 'field error' : 'field'}>
            <label htmlFor="price">price(in cents)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={data.price}
              onChange={this.handleNumberChange}
            />
            <FormInLineMessage content={errors.price} type="error" />
          </div>
          <div className={errors.duration ? 'field error' : 'field'}>
            <label htmlFor="duration">Duration(in min)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={data.duration}
              onChange={this.handleNumberChange}
            />
            <FormInLineMessage content={errors.duration} type="error" />
          </div>
          <div className={errors.players ? 'field error' : 'field'}>
            <label htmlFor="players">players</label>
            <input
              type="text"
              id="players"
              name="players"
              value={data.players}
              onChange={this.handleStringChange}
            />
            <FormInLineMessage content={errors.players} type="error" />
          </div>
        </div>
        <div className="inline field">
          <input
            id="featured"
            name="featured"
            type="checkbox"
            checked={data.featured}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="faetured">featured?</label>
        </div>

        <div className={errors.publishers ? 'field error' : 'field'}>
          <label>publishers</label>
          <select
            name="publisher"
            value={data.publisher}
            onChange={this.handleNumberChange}
          >
            <option value="0">choose publisher</option>
            {this.props.publishers.map(publisher => (
              <option value={publisher._id} key={publisher._id}>
                {publisher.name}
              </option>
            ))}
            <FormInLineMessage content={errors.publishers} type="error" />
          </select>
        </div>
        <div className="ui fluid buttons">
          <button className="ui primary button" type="submit">
            Create
          </button>
          <div className="or"></div>
          <a className="ui secondary button" onClick={this.props.cancle}>
            Cancle
          </a>
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
  cancle: propTypes.func.isRequired,
};
GameForm.defaultProps = {
  publishers: [],
};

export default GameForm;
