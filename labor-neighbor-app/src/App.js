import React, { Component } from 'react';
import './App.css';
import Routes from './routes.js';
import Header from "Components/Header.js";
import Footer from "Components/Footer.js";
import Body from "Components/Body.js";
import SignUpSheet from "Components/SignUpSheet.js";
import Job from "Components/Job.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <Footer />
        <Job />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
