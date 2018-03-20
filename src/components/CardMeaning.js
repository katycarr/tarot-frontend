import React from 'react'

const style = {
  img: {
    marginLeft:'20px',
    boxShadow:'2px 3px 5px black'
  },
  title: {
    color:'rgb(102, 0, 51)',
    fontFamily:'fantasy'
  }
}

class CardMeaning extends React.Component {



  render() {
    const card = this.props.card

    const upright = card.upright_meanings.map(meaning => {
      return <li key={meaning.id}>{meaning.name}</li>
    })
    const reversed = card.reversed_meanings.map(meaning => {
      return <li key={meaning.id}>{meaning.name}</li>
    })

    return(
      <div className='item'>
        <a className='ui small image'>
          <img src={card.img_url} alt={card.name} style={style.img}></img>
        </a>
        <div className='content ui grid'>
          <div className='sixteen wide column left aligned'>
            <span className='ui large header dividing' style={style.title}>{card.name}</span>
          </div>

          <div className='eight wide column left aligned'>
            <h4 className='ui medium header'>Upright Meanings</h4>
            <ul>
              {upright}
            </ul>
          </div>
          <div className='eight wide column left aligned'>
            <h4 className='ui medium header'>Reversed Meanings</h4>
            <ul>
              {reversed}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CardMeaning
