import React, {Component} from 'react';
import Card from '../Card';
import "./Game.css";

function initialCards() {
  return [
    {value: "charmander", matched: false, flipped: false},
    {value: "bulbasaur", matched: false, flipped: false},
    {value: "pikachu", matched: false, flipped: false},
    {value: "pikachu", matched: false, flipped: false},
    {value: "squirtle", matched: false, flipped: false},
    {value: "bulbasaur", matched: false, flipped: false},
    {value: "charmander", matched: false, flipped: false},
    {value: "squirtle", matched: false, flipped: false}
  ];
}

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      cards: initialCards(),
      lastCard: null,
      locked: false,
      matches: 0,
      incorrect: 0
    };
  }

  checkMatch(value, id) {
    if (this.state.locked) {
      return;
    }

    if (this.state.incorrect > 2) {
      return;
    }

    var cards = this.state.cards;
    cards[id].flipped = true;
    this.setState({cards, locked: true});

    if(this.state.incorrect > 4){
      alert("You lose! Press reset to start over.");
    }
    if (this.state.lastCard) {
      if (value === this.state.lastCard.value) {
        var matches = this.state.matches;
        cards[id].matched = true;
        cards[this.state.lastCard.id].matched = true;
        this.setState({cards, lastCard: null, locked: false, matches: matches + 1});
      } else {
        this.setState({incorrect: this.state.incorrect + 1});
        setTimeout(() => {
          cards[id].flipped = false;
          cards[this.state.lastCard.id].flipped = false;
          this.setState({cards, lastCard: null, locked: false});
        }, 1000);
      }
    } else {
      this.setState({
        lastCard: {id, value},
        locked: false
      });
    }
  }

  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <Card
          key={index}
          value={card.value}
          id={index}
          matched={card.matched}
          flipped={card.flipped}
          checkMatch={this.checkMatch} />
      );
    });
  }

  reset() {
    this.setState({
      cards: initialCards(),
      lastCard: null,
      locked: false,
      matches: 0,
      incorrect: 0
    });
  }

  render() {
    var btnText = 'Reset';
    if (this.state.matches === this.state.cards.length / 2) {
      btnText = 'You Win! Play Again?';
    }
    if (this.state.incorrect > 2) {
      btnText = 'You Lose! Play Again?';
    }
    return (
      <div className="Game container main">
        <div className="row gameBg">
          {this.renderCards(this.state.cards)}
        </div>
        <button id="resetBtn" class="btn btn-primary" onClick={this.reset}>{btnText}</button>
        <h3 id="guesses">Incorrect Guesses: {this.state.incorrect} / 3</h3>
      </div>
    );
  }
}
