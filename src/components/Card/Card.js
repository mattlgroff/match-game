import React, {Component} from 'react';
import "./Card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.props.flipped) {
      this.props.checkMatch(this.props.value, this.props.id);
    }
  }

  render() {
    // let cardImg = `https://github.com/mattlgroff/match-game/blob/gh-pages/assets/images/pokeball.png`
    let cardImg = "./assets/images/pokeball.png";
    let cardClass = "pokeball";

    if(this.props.flipped){
      // cardImg = `https://github.com/mattlgroff/match-game/blob/gh-pages/assets/images/${this.props.value}.gif`
      cardClass = "pokemon";
      cardImg = `./assets/images/${this.props.value}.gif`;
    } 

    return (
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 cardContainer text-center">
        <img className={cardClass} alt="card" onClick={this.handleClick} src={cardImg} />
      </div>  
    );
  }
}
