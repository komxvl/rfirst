import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './FilmCard';
import registerServiceWorker from './registerServiceWorker';

import { Router, BrowserRouter} from 'react-router-dom'
import { Switch, Route , browserHistory} from 'react-router'

ReactDOM.render(
    <App />
    , document.getElementById('root'));
registerServiceWorker();
