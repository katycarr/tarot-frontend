import React from 'react'
import DetailList from '../components/DetailList'
import Suit from '../components/Suit'

const baseUrl = 'https://tarotapi.herokuapp.com/cards?suit='


class DetailContainer extends React.Component {
  state = {
    cards:[],
    suitId:''
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      cards:[]
    },this.fetchCards(nextProps))
  }

  componentDidMount = () => {
    this.fetchCards(this.props)
  }

  fetchCards = (props) => {
    const suit = props.match.params.suit
    let url = baseUrl
    if (suit !== 'major-arcana') {
      url += suit
    }
    fetch(url)
      .then(res => res.json())
      .then(json => {
        let id;
        if(json[0].suit) {
          id = json[0].suit.id
        } else {
          id = 1
        }
        this.setState({
        cards:json,
        suitId:id
      })})
  }

  render() {
    const cardIds = this.state.cards.map(card => {
      return card.id
    })
    const suit = < Suit id={this.state.suitId} />

    return(
      <div>
        {this.state.suitId === '' ? null : this.state.suitId === 1 ? null : suit }
        {this.state.cards.length !== 0 ? < DetailList cards={cardIds} /> : null}
      </div>
    )
  }
}

export default DetailContainer
