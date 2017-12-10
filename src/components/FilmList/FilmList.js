import React, { Component } from 'react';
import FilmCard from './components/FilmCard/FilmCard';
import FormAddFilm from './FormAddFilm';

import './MovieList.css';

class FilmList extends Component {
  constructor(props){
    super(props);
    this.state = {
      listFilmsData:null,
      filmName:null,
      filmDescription:null,
      filmYear:null,
      childDataInfo:null
    };
      
    console.log(props);
  }
    
    submitFilm =  (e) => {
        e.preventDefault();

        let titleFilm = e.target["titleFilm"].value;
        let descFilm = e.target["titleFilm"].value;
        let ratingFilm = e.target["ratingFilm"].value;

        console.log("Name",e.target["titleFilm"].value);
        console.log("Descri",e.target["descFilm"].value);
        console.log("ratingFilm",e.target["ratingFilm"].value);

       this.setState({
            childDataInfo:e.target["titleFilm"].value
        });
        console.log("STATE",this.state);
        console.log("PROPS",this.props);
    };
    
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
                      <FilmCard key={index} name={elem.title} description={elem.overview.substr(0,100)} />
                ))
                }
              </div>
        }

        <FormAddFilm onChangeValue={this.submitFilm} />
      </div>
    );
  }
}

export default FilmList;
