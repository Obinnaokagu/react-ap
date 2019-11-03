import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from './GamesList';
import GameForm from './GameForm';
import TopNavigation from './TopNavigation';

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

const games = [
  {
    _id: 1,
    publisher: 1,
    featured: true,
    name: 'Strategy Pack-A',
    thumbnail:
      'https://ksr-ugc.imgix.net/assets/015/361/511/eb3139a5996c2615e879a684ebfd9af1_original.jpg?w=680&fit=max&v=1485968021&auto=format&q=92&s=883858ed01e7244525f6729b0e5a98b2',
    price: 3599,
    players: '2-4',
    duration: 60,
  },
  {
    _id: 2,
    publisher: 1,
    featured: false,
    name: 'Call Of Duty',
    thumbnail:
     "https://cdn.upcomer.com/esports/__sized__/game/images/2016/02/26/103411cod-blackops3-thumbnail-480x480-70.jpg",
    price: 6000,
    players: '2-5',
    duration: 80,
  },
  {
    _id: 3,
    publisher: 2,
    featured: false,
    name: 'King Of New York',
    thumbnail:
      'http://www.ibgcafe.com/wp-content/uploads/bfi_thumb/kony-1-nqdex1he2sfnm7l6kl3zojwierbloon60oxgi3fxd8.jpg',
    price: 5200,
    players: '2-4',
    duration: 45,
  },
  {
    _id: 4,
    publisher: 2,
    featured: false,
    name: 'Big Buck Bunny',
    thumbnail: 'https://i4.lisimg.com/13684264/411full.jpg',
    price: 7000,
    players: '2-6',
    duration: 90,
  },
];

class App extends React.Component {
  state = {
    games: [],
    showGameForm: false,
    selectedGame: {},
  };

  
  componentDidMount() {
    this.setState({
      games: this.sortGames(games)
    });
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
