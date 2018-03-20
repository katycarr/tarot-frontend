import React from 'react'
import DetailList from '../components/DetailList'
import Search from '../components/Search'

const baseUrl = 'https://tarotapi.herokuapp.com/cards?q='

const style = {

}

class ResultContainer extends React.Component {
  state = {
    cards:[]
  }

  handleSubmit = input => {
    const searchTerm = input.replace(/\s+/g, '-').toLowerCase();
    fetch(baseUrl+searchTerm)
      .then(res => res.json())
      .then(json => this.setState({
        cards:json
      }))
  }

  render() {
    const cardIds = this.state.cards.map(card => {
      return card.id
    })

    return(
      <div style={style.page}>
        < Search handleSubmit={this.handleSubmit} />
      {this.state.cards.length !== 0 ? < DetailList cards={cardIds} /> : <div></div>}
      </div>
    )
  }

}

export default ResultContainer
