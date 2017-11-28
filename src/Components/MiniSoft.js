import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './MiniSoft.css'

class Soft extends Component {
  constructor(props) {
    super(props)

    this.getVersions = this.getVersions.bind(this)
    this.deleteSoft = this.deleteSoft.bind(this)
    this.onVersionChange = this.onVersionChange.bind(this)
  }

  componentDidMount() {
    this.props.setVersion(this.props.soft, this.props.soft.versions[0])
  }

  deleteSoft() {
    this.props.deleteSoft(this.props.soft)
  }

  getVersions() {
    if (this.props.soft.versions !== undefined) {
      return this.props.soft.versions.map(version => (<option value={version.name}>{version.name}</option>))
    }
    return undefined
  }

  onVersionChange(event) {
    const version = this.props.soft.versions.find(version => version.name === event.target.value)
    this.props.setVersion(this.props.soft, version)
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
            <select onChange={this.onVersionChange}>
              { this.getVersions() }
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Soft
