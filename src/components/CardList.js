import React, { Component } from 'react';
import TarotCard from './TarotCard'


class CardList extends Component {


  render() {

    const allCards = this.props.cards.map(card => {
      return < TarotCard key={card.id} info={card}/>
    })


    return (
      <div className="ui cards">
        {allCards}
      </div>
    )
  }
}

export default CardList
