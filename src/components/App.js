import React from 'react';
import Game from './Game';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Game />
      </div>
    );
  }
}
