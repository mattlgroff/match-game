import React from 'react';
import "./Navbar.css";


export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-faded container">
        <a className="navbar-brand" href="https://mattlgroff.github.io/match-game">
          <img src="http://thecraftchop.com/files/others/Pokeball.svg" width="30" height="30" className="d-inline-block align-top" alt="pokeball-svg" />
          {"   "}Pokemon Matching Game
        </a>
      </nav>
    );
  }
}
