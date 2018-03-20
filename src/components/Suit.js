import React from 'react'

const baseUrl = 'https://tarotapi.herokuapp.com/suits/'

const style = {
  segment: {
    width:'50%',
    margin:'auto'
  }
}

class Suit extends React.Component {
  state = {
    suit:{}
  }

  componentDidMount = () => {
    this.fetchSuit(this.props)
  }

  componentWillReceiveProps = (nextProps) => {
    this.fetchSuit(nextProps)
  }

  fetchSuit = (props) => {
    fetch(baseUrl+props.id)
      .then(res => res.json())
      .then(json => this.setState({
        suit:json
      }))
  }


  render() {
    return(
      <div className='ui segment' style={style.segment}>
        <div className='ui header'>Suit of {this.state.suit.name}</div>
        <div>Element: {this.state.suit.element}</div>
        <div>Class: {this.state.suit.associated_class}</div>
        <div>Faculty: {this.state.suit.faculty}</div>
      </div>
    )
  }
}

export default Suit
