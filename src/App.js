import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FilmList from './FilmList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <FilmList />
      </div>
    );
  }
}

export default App;
