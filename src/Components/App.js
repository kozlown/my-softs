import React, { Component } from 'react'
import logo from '../logo.svg'
import softs from '../Softs/softs.json'
import Soft from './Soft'
import './App.css'

class App extends Component {
  getSofts() {
    return softs.map((soft) => (<Soft {...soft} />))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My softs</h1>
        </header>
        { this.getSofts() }
      </div>
    );
  }
}

export default App
