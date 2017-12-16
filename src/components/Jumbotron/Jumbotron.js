import React from 'react';
import "./Jumbotron.css";


export default class Jumbrotron extends React.Component {

  render() {
    return (
      <div className="jumbotron container">
        <h1 className="display-3">Pokemon Matching Game!</h1>
        <p className="lead">This is a ReactJS based matching game.</p>
        <hr className="my-4" />
        <p>You get 3 guesses to match the Pokemon. Press Reset to start over!</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="https://github.com/mattlgroff/match-game" role="button">Source Code</a>
        </p>
      </div>
    );
  }
}
