import React, { Component } from 'react';
import CardList from '../components/CardList'

const baseUrl = 'https://tarotapi.herokuapp.com/cards'

class CardContainer extends Component {
  state = {
    cards:[]
  }

  componentDidMount = () => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(json => this.setState({
        cards:json
      }))
  }

  render() {
    return(
      <div>
        <h1 className="ui header">Tarot Book</h1>
        < CardList cards={this.state.cards} url={baseUrl} />
      </div>
    )
  }
}

export default CardContainer
