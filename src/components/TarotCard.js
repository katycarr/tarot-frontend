import React, { Component } from 'react';
import CardDetail from './CardDetail'
import ReactCardFlip from 'react-card-flip'



class TarotCard extends Component {
  state = {
    isFlipped:false
  }

  flipCard = () => {
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  }



  render() {

    const contentStyle = {
      width:'100px',
      height:'200px'
    }

    const cardStyle = {
      width:'100px',
      height:'200px',
      margin:'20px'
    }

    return(
      <div style={cardStyle}>
        <ReactCardFlip isFlipped={this.state.isFlipped} >
          <a className="image" key="front" onClick={this.flipCard}>
            <img style={contentStyle} src={this.props.info.img_url} alt={this.props.info.name}></img>
          </a>
          <div key="back" onClick={this.flipCard} style={contentStyle} >
            <CardDetail card={this.props.info}/>
          </div>
        </ReactCardFlip>
      </div>
    )
  }
}

export default TarotCard
