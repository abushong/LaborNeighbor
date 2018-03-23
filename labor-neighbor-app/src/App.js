import React, { Component } from 'react';
import './App.css';
import Routes from './routes.js';
import Header from "Components/Header.js";
import Footer from "Components/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <Footer />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
