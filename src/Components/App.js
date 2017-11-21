import React, { Component } from 'react'
import softs from '../Softs/softs'
import SearchBar from './SearchBar'
import Soft from './Soft'
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
      </div>
    );
  }
}

export default App
