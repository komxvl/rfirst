import React, { Component } from 'react';
import './FilmCard.css';

class FilmCard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="MovieCard">
          <button className="MovieCard__btn MovieCard__btn--del">delete</button>
          <div className="MovieInfo__info">
            <h2 className="MovieInfo__title">{this.props.name}</h2>
              <p className="MovieInfo__descr">{this.props.description}</p>
          </div>
        </div>
    );
  }
}

export default FilmCard;
