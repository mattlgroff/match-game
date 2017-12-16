import React from 'react';
import Game from './Game';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron'
import Footer from './Footer'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Game />
        <Footer />
      </div>
    );
  }
}
