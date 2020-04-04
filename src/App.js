import React  from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import "./App.css";

class App extends React.Component {
  state = {
    users: [], 
    loading: false
  };

  // TO SEARCH GITHUB USERS
  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data.items, loading:false});
  }

  render()  {
    return (
      <div className="App">
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;