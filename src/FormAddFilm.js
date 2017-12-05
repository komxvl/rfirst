import React, { Component } from 'react';
import './FormAddFilm.css';

class FormAddFilm extends Component {
    pointRatingFilm = [1,2,3,4,5,6,7,8,9,10];
    constructor(props) {

        super(props);
        this.state = {
            titleFilm:'',
            descFilm:'Please write an essay about your favorite DOM element.',
            ratingFilm:""
        };
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("State Form",this.state);
    }

    submitFilm(e){
        e.preventDefault();
        console.log("Raiting Film",this.state.ratingFilm);
        const filmProps = {
            title:this.state.titleFilm,
            descFilm: this.state.descFilm,
            ratingFilm:this.state.ratingFilm
        };

        console.log("filmProps",filmProps);

        this.state = {
            titleFilm:'',
            descFilm:'Please write an essay about your favorite DOM element.',
            ratingFilm:""
        };

        console.log("Film Info properties:",this.state);
    }

    render() {
        return (
            <form className="MovieForm" onSubmit={(e) => this.submitFilm(e)}>
                <label className="MovieForm__label">Title
                    <input type="text" name="titleFilm"  value={this.state.titleFilm} onChange={(e) => this.handleChange(e)} className="MovieForm__input"/>
                </label>
                <label className="MovieForm__label">Description
                    <textarea className="MovieForm__txtarea" rows="8"  value={this.state.descFilm}  name="descFilm" onChange={(e) => this.handleChange(e)} > </textarea>
                </label>
                <label className="MovieForm__label">Rating
                    <select className="MovieForm__input" name="ratingFilm" onChange={(e) => this.handleChange(e)}  value={this.state.ratingFilm}>
                        {this.pointRatingFilm.map((elem,index) =>{
                           return <option key={index} value={elem}>{elem}</option>
                        })
                        }
                    </select>
                </label>
                <button className="MovieForm__submit" type="submit">submit</button>
            </form>
        );
    }
}

export default FormAddFilm;
