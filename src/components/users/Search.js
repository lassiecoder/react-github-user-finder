import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div className="searchContainer" style={{ position: "sticky", top: 0 }}>
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
        {/* it will work if the search result will be shown on the screen */}
        {showClear && (
          <div className="clearPage">
            <i class="fa fa-eraser" onClick={clearUsers}></i>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
