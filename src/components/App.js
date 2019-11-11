import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from './GamesList';
import GameForm from './GameForm';
import TopNavigation from './TopNavigation';
import api from './api';

const publishers = [
  {
    _id: 1,
    name: 'Days of Wonder',
  },
  {
    _id: 2,
    name: 'Rio Grand Games',
  },
];


class App extends React.Component {
  state = {
    games: [],
    showGameForm: false,
    selectedGame: {},
  };

  
  // componentDidMount() {
  //   this.setState({
  //     games: this.sortGames(games)
  //   });
  // }

  componentDidMount() {
    api.games
    .fetchAll()
    .then(games => this.setState({ games: this.sortGames(games) }));
  }

  sortGames(games) {
    return _orderBy(games, ['featured', 'name'], ['desc', 'asc']);
  }


toggleFeatured = gameId => {
  this.setState({
    games: this.sortGames(
      this.state.games.map(
        game =>
        gameId === game._id ? { ...game, featured: !game.featured } : game
      )
    )
  });
}

  // or
  // toggleFeatured = gameId => {
  //   const newGames = this.state.games.map(game => {
  //     if (game._id === gameId) return { ...game, featured: !game.featured };
  //     return game;
  //   });
  //   this.setState({ games: this.sortGames(newGames) });
  // };



  showGameForm = () => this.setState({ showGameForm: true, selectedGame: {} });
  hideGameForm = () => this.setState({ showGameForm: false, selectedGame: {} });

  selectGameForEditing = game =>
    this.setState({ selectedGame: game, showGameForm: true });

    saveGame = game => (game._id ? this.updateGame(game): this.addGame(game));


  addGame = game =>
    this.setState({
      games: [
        ...this.state.games,
        {
          ...game,

          _id: this.state.games.length + 1,
        },
      ],
      showGameForm: false,
    });

    updateGame = game => 
    this.setState({
      games: this.sortGames(
        this.state.games.map(item => (item._id === game._id ? game : item))
      ),
      showGameForm: false
    });

    deleteGame = game => this.setState({
      games:this.state.games.filter(item => item._id !== game._id)
    });


  render() {
    const numberOfColumns = this.state.showGameForm ? 'ten' : 'sixteen';
    return (
      <div className="ui container">
        <TopNavigation showGameForm={this.showGameForm} />
        <div className="ui stackable grid">
          {this.state.showGameForm && (
            <div className="six wide column">
              <GameForm
                publishers={publishers}
                cancle={this.hideGameForm}
                submit={this.saveGame}
                game={this.state.selectedGame}
              />
            </div>
          )}
          <div className={`${numberOfColumns} wide column`}>
            <GamesList
              games={this.state.games}
              toggleFeatured={this.toggleFeatured}
              editGame={this.selectGameForEditing}
              deleteGame={this.deleteGame}
            />
          </div>
        </div>

        <br />
      </div>
    );
  }
}

export default App;
