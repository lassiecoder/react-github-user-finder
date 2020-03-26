import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}
