import React from 'react'
import DetailList from '../components/DetailList'
import Search from '../components/Search'

const baseUrl = 'https://tarotapi.herokuapp.com/cards?'

const style = {

}

class ResultContainer extends React.Component {
  state = {
    cards:[]
  }

  handleSubmit = (input, searchBy) => {
    const searchTerm = input.replace(/\s+/g, '-').toLowerCase();
    let url;
    if(searchBy === 'name') {
      url = baseUrl+'q='+searchTerm
    } else if (searchBy === 'meaning') {
      url = baseUrl+'meaning='+searchTerm
    }
    fetch(url)
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
