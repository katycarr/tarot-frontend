import React from 'react'
import Spread from '../components/Spread'

const baseUrl = 'https://tarotapi.herokuapp.com/cards/'

const style = {
  center: {
    margin:'auto'
  },
  align: {
    textAlign:'center'
  }
}

class ReadingContainer extends React.Component {
  state = {
    cards:[]
  }

  getCards = () => {
    let ids = []
    for (var i = 0; i < 3; i++) {
      let newNum = Math.floor(Math.random()*78) + 1
      while (ids.includes(newNum)) {
        newNum = Math.floor(Math.random()*78) + 1
      }
      ids = [...ids, newNum]
    }
    ids.forEach(id => {
      fetch(baseUrl+id)
        .then(res => res.json())
        .then(json => {
          let current = this.state.cards
          this.setState({
          cards:[...current, json]
        })})
    })
  }

  render() {
    return(
      <div style={style.align}>
        <div style={style.center} className="ui button" onClick={this.getCards}>Read me!</div>
        {this.state.cards.length === 3 ? <Spread cards={this.state.cards} /> : null}
      </div>
    )
  }
}

export default ReadingContainer
