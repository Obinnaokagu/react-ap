import React from 'react';
import GamesList from './GamesList';


const games = [
    {
        _id: 1,
        name: "Quadropolis",
        thumbnail: "https://cf.geekdo-images.com/W9bbXs5FZwzLNlT5Pz6G-uV2Wek=/fit-in/1200x630/pic3251870.jpg",
        price:"35.99",
        players: "2-4",
        duration: 60,
    },
    {
        _id: 2,
        name: "Five Tribes",
        thumbnail: "https://cf.geekdo-images.com/itemrep/img/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg",
        price:"60.00",
        players: "2-5",
        duration: 80,
    },
    {
        _id: 3,
        name: "Rose Of The Galaxy",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9W5ck7D255MvP5TL9BgEoR_NYVK5J-6TWrHcD71smAEIju1LNQ",
        price:"52.00",
        players: "2-4",
        duration: 45,
    }
];




const App = () => (
    <div className="ui container">
        <GamesList games={games} />
    </div>
);

export default App;