import React, { Component } from 'react'
import softs from '../Softs/softs.json'
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
    return softs
      .filter((soft) => soft.name.match(new RegExp(this.state.search, 'i')))
      .map((soft) => (<Soft {...soft} />))
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
        { this.getSofts() }
      </div>
    );
  }
}

export default App
