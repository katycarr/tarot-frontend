import React from 'react'

class Search extends React.Component {
  state = {
    input:''
  }

  onChange = event => {
    this.setState({
      input:event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.input)
  }

  render() {
    return(
      <form className='ui form' onSubmit={this.onSubmit}>
        <div className='fields'>
          <div className='field'>
            <input type='text' value={this.state.input} onChange={this.onChange}></input>
          </div>
          <div className='field'>
            <input type='submit' className='ui primary button' value='Search'></input>
          </div>
        </div>

      </form>
    )
  }

}

export default Search
