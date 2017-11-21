import React, { Component } from 'react'
import softs from '../Softs/softs'
import SearchBar from './SearchBar'
import Soft from './Soft'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }

    this.onSearch = this.onSearch.bind(this)
  }

  getSofts() {
    console.info(softs[0].script({
      version: softs[0].version
    }))
    return softs
      .filter(soft => soft.name.match(new RegExp(this.state.search, 'i')))
      .map((soft, index) => (<Soft {...soft} key={index} />))
  }

  onSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://github.com/kozlown/my-softs" id="github-ribbon">
            <img src="img/forkme.png" alt="Fork me on GitHub" />
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
