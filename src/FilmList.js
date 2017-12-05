import React, { Component } from 'react';
import FilmCard from './FilmCard';
import FormAddFilm from './FormAddFilm';

import './MovieList.css';

class FilmList extends Component {
  constructor(props){
    super(props);
    this.state = {
      listFilmsData:null,
      filmName:null,
      filmDescription:null,
      filmYear:null
    };

    console.log(props);
  }

    listFilms = () => {
      fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f24a0fd18f52218851075901c5a108a0')
          .then(response => {
                if (response.status == 200) {
                  return response.json();
                }
                throw new Error("Error fetching data");
              }
          ).then(data => {
        this.setState({
          listFilmsData:data
          //filmName:this.state.listFilmsData.results.title
        });
        console.log("DATA", data);
      }).catch(error => {
        console.error("Error: ", error);
      });
  };

  componentWillMount(){
      this.listFilms();
  }


  render() {
    return (
      <div style={{display:'flex',justifyContent:"space-between",alignItems: "flex-start"}}>
        {
          this.state.listFilmsData === null ? "Loading..." :
              <div className="MovieList">
                {this.state.listFilmsData.results.map((elem, index)=> (
                      <FilmCard  key={index} name={elem.title} description={elem.overview.substr(0,100)} />
                ))
                }
              </div>
        }

        <FormAddFilm />
      </div>
    );
  }
}

export default FilmList;
