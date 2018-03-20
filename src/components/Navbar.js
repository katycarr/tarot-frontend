import React from 'react'
import { NavLink } from 'react-router-dom'


const style = {
  nav: {
    backgroundColor:'black',
    marginBottom:'20px'
  }
}

class Navbar extends React.Component {
  render() {
    return(
      <div className='ui inverted secondary pointing menu' style={style.nav}>
        <NavLink className='header item' to='/'>Home</NavLink>
        <NavLink className='item' to='/major-arcana'>Major Arcana</NavLink>
        <NavLink className='item' to='/coins'>Coins</NavLink>
        <NavLink className='item' to='/wands'>Wands</NavLink>
        <NavLink className='item' to='/cups'>Cups</NavLink>
        <NavLink className='item' to='/swords'>Swords</NavLink>
        <NavLink className='item' to='/search'>Search</NavLink>
        <NavLink className='item' to='/reading'>Reading</NavLink>
      </div>
    )
  }
}

export default Navbar
