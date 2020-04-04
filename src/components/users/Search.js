import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ''
  };

  onSubmit = e => {
      e.preventDefault();
      this.props.searchUsers(this.state.text);
      this.setState({text: ''})
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="searchContainer">
        <form className="search" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search User"  
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="searchBtn" />
        </form>
      </div>
    );
  }
}

export default Search;
