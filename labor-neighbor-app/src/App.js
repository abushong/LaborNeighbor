import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "Components/Header.js";
import Footer from "Components/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Welcome to Labor Neighbor... bitch. To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
