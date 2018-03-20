import React from 'react'

class CardDetail extends React.Component {

  render() {

    const segmentStyle = {
      width:'100%',
      height:'100%'
    }
    return (
      <div style={segmentStyle} className="ui inverted segment">
        <h3 className="ui header">{this.props.card.name}</h3>
        <div>{this.props.card.arcana.name} Arcana</div>
        <div>Number: {this.props.card.number}</div>
      </div>
    )
  }
}

export default CardDetail
