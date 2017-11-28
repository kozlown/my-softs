import React, { Component } from 'react'
import RoundSelect from './Generics/RoundSelect'
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    const osChoices = [
      {
        name: "Ubuntu 16.04"
      },
      {
        name: "Arch Linux 2017.11.01"
      }
    ]

    return (
      <div className="SearchBar" id={this.props.id} onChange={this.props.onChange}>
        <input type="text" name="search" placeholder={this.props.placeholder}/>
        <RoundSelect choices={osChoices} className="os" handleSelect={this.props.handleSelectOs}/>
      </div>
    );
  }
}

export default SearchBar
