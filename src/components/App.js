import React from 'react';
import _orderBy from "lodash/orderBy";
import GamesList from './GamesList';

const games = [
  {
    _id: 1,
    featured: false,
    name: 'Strategy Pack-A',
    thumbnail:
      'https://ksr-ugc.imgix.net/assets/015/361/511/eb3139a5996c2615e879a684ebfd9af1_original.jpg?w=680&fit=max&v=1485968021&auto=format&q=92&s=883858ed01e7244525f6729b0e5a98b2',
    price: 3599,
    players: '2-4',
    duration: 60,
  },
  {
    _id: 2,
    featured: false,
    name: 'Five Tribes',
    thumbnail:
      'https://cf.geekdo-images.com/itemrep/img/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg',
    price: 6000,
    players: '2-5',
    duration: 80,
  },
  {
    _id: 3,
    featured: true,
    name: 'King Of New York',
    thumbnail:
      'http://www.ibgcafe.com/wp-content/uploads/bfi_thumb/kony-1-nqdex1he2sfnm7l6kl3zojwierbloon60oxgi3fxd8.jpg',
    price: 5200,
    players: '2-4',
    duration: 45,
  },
  {
    _id: 4,
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
  };
  componentDidMount() {
    this.setState({
      games: _orderBy(games, ["Featured", "name "], ["desc", "asc"])});
  }
  render() {
    return (
      <div className="ui container">
        <GamesList games={this.state.games} />
      </div>
    );
  }
}

export default App;
