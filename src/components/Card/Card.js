import React, {Component} from 'react';
import "./Card.css";
import classnames from 'classnames';

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
    var classes = classnames(
      'Card',
      {'Card--flipped': this.props.flipped},
      {'Card--matched': this.props.matched}
    );

    var cardValue = this.props.flipped ? this.props.value : '';

    let cardImg = "/assets/images/pokeball.png";

    if(this.props.flipped){
      cardImg = `/assets/images/${this.props.value}.gif`;
    } 

    return (
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 cardContainer text-center">
        <img className="img-fluid" onClick={this.handleClick} src={cardImg} />
      </div>  
    );
  }
}
