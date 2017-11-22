import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './MiniSoft.css'

class Soft extends Component {
  constructor(props) {
    super(props)

    this.getVersions = this.getVersions.bind(this)
    this.deleteSoft = this.deleteSoft.bind(this)
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

    return (
      <div className='MiniSoft'>
        <div className='img' style={imageStyle} />
        <div className='text'>
          { this.props.soft.name }
        </div>
        <FontAwesome
          onClick={this.deleteSoft}
          className='delete'
          name='times'
          size='2x'
        />
        <div>
          <div className='Version'>
            Version
          </div>
          <div className='select-container'>
            <select>
              { this.getVersions() }
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Soft
