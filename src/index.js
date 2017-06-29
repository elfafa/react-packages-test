import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router'

import Main from './Main'
import Video from './video/Main'

ReactDOM.render(
    <div>
        <Router history={ browserHistory } >
            <Route path="/video" component={ Video } />
            <Route path="*" component={ Main } />
        </Router>
    </div>,
    document.getElementById('root')
);
