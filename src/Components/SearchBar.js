import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar" id={this.props.id} onChange={this.props.onChange}>
        <input type="text" name="search" placeholder={this.props.placeholder}/>
      </div>
    );
  }
}

export default SearchBar
