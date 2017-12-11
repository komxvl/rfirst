import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FilmList from './components/FilmList/FilmList';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <FilmList />
      </div>
    );
  }
}

export default App;
