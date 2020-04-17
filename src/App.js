import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // TO SEARCH GITHUB USERS
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // CLEAR SEARCHED DATA (USERS) FROM STATE
  clearUsers = () => this.setState({ users: [], loading: false });

  // ALERT FOR EMPTY INPUT FIELD
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users
                    loading={this.state.loading}
                    users={this.state.users}
                  />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>

          <Alert alert={this.state.alert} />
        </div>
      </Router>
    );
  }
}

export default App;
