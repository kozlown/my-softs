import React, { Component } from 'react'
import softs from '../Softs/softs'
import SearchBar from './SearchBar'
import Soft from './Soft'
import MiniSoft from './MiniSoft'
import FontAwesome from 'react-fontawesome'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      added: []
    }

    this.onSearch = this.onSearch.bind(this)
    this.addSoft = this.addSoft.bind(this)
    this.deleteSoft = this.deleteSoft.bind(this)
  }

  getSofts() {
    return softs
      .filter(soft => soft.name.match(new RegExp(this.state.search, 'i')))
      .map(soft => {
        const added = this.state.added.some(added => added.name === soft.name)
        const softProps = {
          soft,
          added,
          addSoft: this.addSoft,
          deleteSoft: this.deleteSoft
        }
        return (<Soft {...softProps} />)
      })
  }

  getMiniSofts() {
    return this.state.added
      .map(soft => {
        const softProps = {
          soft,
          deleteSoft: this.deleteSoft
        }
        return (<MiniSoft {...softProps} />)
      })
  }

  addSoft(softToAdd) {
    this.setState({
      added: this.state.added.concat([softToAdd])
    })
  }

  deleteSoft(softToDelete) {
    this.setState({
      added: this.state.added.filter(soft => soft.name !== softToDelete.name)
    })
  }

  onSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    let miniSofts = this.getMiniSofts()
    if (miniSofts.length === 0) {
      miniSofts = <div id='NoSofts'>
        <FontAwesome
          onClick={this.deleteSoft}
          className='delete'
          name='thermometer-empty'
          size='2x'
        />
        <span style={{ 'padding-left': '10px' }}>
          No softs added, click on a soft to add it...
        </span>
      </div>
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <a href='https://github.com/kozlown/my-softs' id='github-ribbon'>
            <img src='img/forkme.png' alt='Fork me on GitHub' />
          </a>
          <SearchBar onChange={this.onSearch} placeholder={'Search a soft...'} />
        </header>
        <div id='Softs'>
          { this.getSofts() }
        </div>
        <div id='MiniSofts'>
          { miniSofts }
        </div>
      </div>
    );
  }
}

export default App
