import React, { Component } from 'react'
import './Soft.css'

class Soft extends Component {
  constructor(props) {
    super(props)

    this.getVersions = this.getVersions.bind(this)
    this.addSoft = this.addSoft.bind(this)
    this.deleteSoft = this.deleteSoft.bind(this)
  }

  addSoft() {
    this.props.addSoft(this.props.soft)
  }

  deleteSoft() {
    this.props.deleteSoft(this.props.soft)
  }

  getVersions() {
    if (this.props.soft.versions !== undefined) {
      return this.props.soft.versions.map(version => (<option value={version}>{version}</option>))
    }
    return undefined
  }

  render() {
    const imageStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/img/${this.props.soft.picture})`
    }

    const frontLayerStyle = {
      display: this.props.added ? 'block' : 'none'
    }

    return (
      <div className='Soft'>
        <div className='FrontLayer' style={frontLayerStyle} onClick={this.deleteSoft} />
        <div className='text'>
          { this.props.soft.name }
        </div>
        <div className='img' style={imageStyle} onClick={this.addSoft}/>
      </div>
    );
  }
}

export default Soft
