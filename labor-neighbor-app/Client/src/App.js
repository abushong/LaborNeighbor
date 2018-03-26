import React, { Component } from 'react';
import './App.css';
import Routes from './routes.js';
import Header from "Components/Header.js";
import Footer from "Components/Footer.js";
import SignUpSheet from "Components/SignUpSheet.js";

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({ response: res.express}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/User', {method: 'POST'});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
