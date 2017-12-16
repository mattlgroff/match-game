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

    let cardImg = "/assets/images/pokeball.png";

    if(this.props.flipped){
      cardImg = `/assets/images/${this.props.value}.gif`;
    } 

    return (
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 cardContainer text-center">
        <img className="pokemon" alt="card" onClick={this.handleClick} src={cardImg} />
      </div>  
    );
  }
}
