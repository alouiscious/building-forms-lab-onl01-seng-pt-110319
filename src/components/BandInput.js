// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    })
  }

  handleOnsubmit = event => {
    event.preventDefault()
    const bandProfile = {...this.state}
    this.props.addBand(bandProfile)
    this.setState({
      name: ''
    })
  }



  render() {
    return(
      <div>
        <form onSubmit={this.handleOnsubmit}>
          <input type="text" onChange={this.handleOnChange} placeholder="Enter a Band Name" />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
