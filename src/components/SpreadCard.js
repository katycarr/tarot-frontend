import React from 'react'

const style = {
  reversed: {
    transform:'rotate(180deg)',
  },
  card: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  center: {
    margin:'auto'
  },
  glow: {
    boxShadow:'0px 0px 5px rgba(81, 203, 238, 1), 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    transition: 'all 0.30s ease-in-out',
  },
  list: {
    textAlign: 'center',
    margin:'auto',
    marginTop:'15px'
  }
}


class SpreadCard extends React.Component {
  state = {
    display:false,
    glow:false
  }

  toggleVisibility = () => {
    this.setState({
      display: !this.state.display
    })
  }

  toggleGlow = () => {
    this.setState({
      glow: !this.state.glow
    })
  }


  render() {
    const card = this.props.card
    const meanings = this.props.isReversed ? card.reversed_meanings : card.upright_meanings
    const meaningLis = meanings.map(meaning => {
      return <span className='item'>{meaning.name}</span>
    })

    return(
      <div style={style.list}>
        <div className='ui small image' style={this.state.glow ? style.glow : style.card} onClick={this.toggleVisibility} onMouseEnter={this.toggleGlow} onMouseLeave={this.toggleGlow}>
          <img src={card.img_url} alt={card.name} style={this.props.isReversed ? style.reversed : null}></img>
        </div>
        <div className='' style={this.state.display ? {display:'block'} : {display:'none'}}>
          <div className='ui compact padded piled segment list' style={style.list}>
            {meaningLis}
          </div>
        </div>
      </div>
    )
  }

}

export default SpreadCard
