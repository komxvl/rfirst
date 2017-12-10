import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css';

class Header extends Component {
  render() {
    return (
        <header className="Header">
            <h1 className="Header__logo">movie mate</h1>
            <ul className="Navigation">
                <li className="Navigation__item">
                    <a className="Navigation__link" href="">Login</a>
                </li>
                <li className="Navigation__item">
                    <a className="Navigation__link" href="">Browse</a>
                </li>
                <li className="Navigation__item">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </header>
    );
  }
}

export default Header;
