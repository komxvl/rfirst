import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter, Route, Link} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={App} />
        </div>
    </HashRouter >
    , document.getElementById('root'));
registerServiceWorker();
