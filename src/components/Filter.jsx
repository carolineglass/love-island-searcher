import React, { Component } from 'react';

class Filter extends Component {

  handleFilter = (e) => {
    this.props.changeSeasonFilter(e.target.value)
  }

  render() {
    return (
    <div className="filter-container">
      <nav className="filter">
        <select value={this.props.seasonFilter} onChange={this.handleFilter}>
          <option value="All">All</option>
          <option value="1">Season One</option>
          <option value="2">Season Two</option>
          <option value="3">Season Three</option>
          <option value="4">Season Four</option>
          <option value="5">Season Five</option>
          <option value="6">Season Six</option>
        </select>
      </nav>
      </div>
    );
  }

}

export default Filter;