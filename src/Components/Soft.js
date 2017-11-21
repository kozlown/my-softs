import React, { Component } from 'react'
import './Soft.css'

class Soft extends Component {
  render() {
    const style = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/img/${this.props.picture})`
    }

    return (
      <div className="Soft">
        <div className="text">
          { this.props.name }
        </div>
        <div className="img" style={style}>
        </div>
      </div>
    );
  }
}

export default Soft
