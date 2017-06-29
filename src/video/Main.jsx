import React from 'react';

import './Main.css';

//import ReactNativeVideoTest from './ReactNativeVideoTest.jsx';
import VideoReactTest from './VideoReactTest.jsx';
import ReactPlayerTest from './ReactPlayerTest.jsx';

var Main = React.createClass(
{
    render()
    {
        return (
            <div>
                <div className="col-xs-12" style={{ backgroundColor: 'grey', padding: '20px' }}>
                    <h2>VideoReact</h2>
                    <VideoReactTest />
                </div>
                <div className="col-xs-12" style={{ backgroundColor: 'lightgrey', padding: '20px' }}>
                    <h2>ReactPlayer</h2>
                    <ReactPlayerTest />
                </div>
            </div>
        );
    }
});

module.exports = Main;