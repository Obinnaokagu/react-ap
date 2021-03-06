import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';
import FormInLineMessage from './FormInlineMessage';

const initialData = {
  
    _id: null,
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: "",
    featured: false,
    publisher: 0,
    thumbnail: "",
  
}

class GameForm extends Component {
  state = {
    data: initialData,
    errors: {},
  };

  componentDidMount() {
      if (this.props.game._id) {
      this.setState({ data: this.props.game });
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.game._id && nextProps.game._id !== this.state.data._id) {
      this.setState({ data: nextProps.game });
    }
    if (!nextProps.game._id) {
      this.setState({ data: initialData });
    }
  }

  validation(data) {
    const errors = {};
    if(!data.name) errors.name = "This field can't be blank";
    if(!data.players) errors.players = "This field can't be blank"; 
    if(!data.thumbnail) errors.thumbnail = "This field can't be blank";
    if(!data.publisher) errors.publisher = "This field can't be blank";
    if(data.price <= 0) errors.price = "Very cheap, and can be easly afford";
    if(data.duration <= 0) errors.duration = "Too short, can't enjoy the playing time";
    return errors;
  }
  handleSumbit = e => {
    e.preventDefault();
    const errors = this.validation(this.state.data);
    this.setState({ errors });

    if(Object.keys(errors).length === 0) {
    this.props.submit(this.state.data);
    }
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

        <div className={errors.publisher ? 'field error' : 'field'}>
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
            <FormInLineMessage content={errors.publisher} type="error" />
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
  submit: propTypes.func.isRequired,
  game: propTypes.shape({
    name: propTypes.string,
    thumbnail: propTypes.string,
    players: propTypes.string,
    price: propTypes.number,
    duration: propTypes.number,
    featured: propTypes.bool,
  }).isRequired
};

GameForm.defaultProps = {
  publishers: [],
};

export default GameForm;
