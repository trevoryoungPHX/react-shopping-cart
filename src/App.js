import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart'


class App extends Component {
  render() {

    let copyright = new Date().getFullYear();

    return (
      <div className="App">
        <ShoppingCart date={copyright}/>
      </div>
    );
  }
}

export default App;
