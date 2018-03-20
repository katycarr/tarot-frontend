import React from 'react'
import { Form } from 'semantic-ui-react'

const style = {
  form: {
    marginLeft:'50px'
  }
}

class Search extends React.Component {
  state = {
    input:'',
    value:'name'
  }

  onChange = event => {
    this.setState({
      input:event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.input, this.state.value)
  }

  handleRadioChange = (e,value) => {
    this.setState({
      value:value.value
    })
  }

  render() {
    return(
      <form className='ui form' onSubmit={this.onSubmit} style={style.form}>
        <div className='fields'>
          <div className='field'>
            <input type='text' value={this.state.input} onChange={this.onChange}></input>
          </div>
          <Form.Group inline>
            <label>Search by: </label>
            <Form.Radio label='Name' value='name' checked={this.state.value === 'name'} onChange={this.handleRadioChange} />
            <Form.Radio label='Meaning' value='meaning' checked={this.state.value === 'meaning'} onChange={this.handleRadioChange} />

          </Form.Group>
          <div className='field'>
            <input type='submit' className='ui primary button' value='Search'></input>
          </div>
        </div>

      </form>
    )
  }

}

export default Search
