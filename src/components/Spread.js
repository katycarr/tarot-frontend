import React from 'react'
import SpreadCard from './SpreadCard'

const style = {
  grid: {
    width:'90%',
    margin:'auto'
  },
  header: {

  }
}

class Spread extends React.Component {

  render() {
    const cards = this.props.cards.map(card => {
      return <div className='ui column' key={card.id}><SpreadCard card={card} isReversed={Math.floor(Math.random()*2)===0}/></div>
    })
    return(
      <div>
        <div className='ui three column grid' style={style.grid}>
          <div className='ui column'><div className='ui header centered'>Past</div></div>
          <div className='ui column'><div className='ui header centered'>Present</div></div>
          <div className='ui column'><div className='ui header centered'>Future</div></div>
        </div>
        <div className='ui three column grid' style={style.grid}>
          {cards}
        </div>
      </div>

    )
  }
}

export default Spread
