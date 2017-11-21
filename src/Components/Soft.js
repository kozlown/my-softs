import React, { Component } from 'react'
import './Soft.css'

class Soft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/${this.props.picture})`
      }
    }
  }

  render() {
    return (
      <div className="Soft">
        <div className="text">
          { this.props.name }
        </div>
        <div className="img" style={this.state.style}>
        </div>
      </div>
    );
  }
}

export default Soft
