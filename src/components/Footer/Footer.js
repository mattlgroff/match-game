import React from 'react';
import "./Footer.css";


export default class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">&copy; 2017 Matthew Groff </span>
        </div>
      </footer>
    );
  }
}
