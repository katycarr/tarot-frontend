import React from 'react'
import CardMeaning from './CardMeaning'

const baseUrl = 'https://tarotapi.herokuapp.com/cards/'

class DetailList extends React.Component {
  state = {
    cards:[]
  }


  orderedCards = () => {
    return this.state.cards.sort((a,b) => {
      return a.integer - b.integer
    })
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      cards:[]
    }, this.fetchCards(props))

  }

  componentDidMount = () => {
    this.fetchCards(this.props)
  }

  fetchCards = (props) => {
    const ids = props.cards.sort((a,b) => {
      return a - b
    })
    ids.forEach(id => {
      fetch(baseUrl+id)
        .then(res => res.json())
        .then(json => {
          const currentCards = this.state.cards
          this.setState({
            cards:[...currentCards, json]
          })
      })
    })
  }

  render() {
    const cards = this.orderedCards().map(card => {
      return < CardMeaning card={card} key={card.id} />
    })

    return(
      <div className='ui unstackable items'>
        {cards}
      </div>
    )
  }

}

export default DetailList
