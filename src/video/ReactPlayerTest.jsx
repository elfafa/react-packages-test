import React from 'react';

import './Main.css';
import ReactPlayer from 'react-player';

var ReactPlayerTest = React.createClass(
{
    render()
    {
        return (
            <div className="col-xs-12">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h3>Youtube</h3>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=UGtKGX8B9hU&t=7s"
                        playing
                        controls={ true }
                        width={ '100%' }
                        height={ 'auto' }
                    />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h3>Vimeo</h3>
                    <ReactPlayer
                        url="https://vimeo.com/17950038"
                        playing
                        controls={ true }
                        width={ '100%' }
                        height={ 'auto' }
                    />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h3>Dailymotion</h3>
                    <ReactPlayer
                        url="http://www.dailymotion.com/video/ximmst_le-vent-par-un-brassens-qui-ressemble-plus-a-jean-ferrat_music"
                        playing
                        controls={ true }
                        width={ '100%' }
                        height={ 'auto' }
                    />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h3>Facebook</h3>
                    <ReactPlayer
                        url="https://www.facebook.com/facebook/videos/10155008726816729/"
                        playing
                        controls={ true }
                        width={ '100%' }
                        height={ 'auto' }
                    />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h3>Other</h3>
                    <ReactPlayer
                        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        playing
                        controls={ true }
                        width={ '100%' }
                        height={ 'auto' }
                    />
                </div>
            </div>
        );
    }
});

module.exports = ReactPlayerTest;
