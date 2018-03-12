import React, { Component } from 'react';
import './App.css';
import Header from "Components/Header.js";
import Footer from "Components/Footer.js";
//import Body from "Components/Body.js";
import SignUpSheet from "Components/SignUpSheet.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        Body /
        <SignUpSheet />
        <Footer />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
