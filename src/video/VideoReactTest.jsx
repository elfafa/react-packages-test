import React from 'react';

import './Main.css';
import '../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';

var VideoReactTest = React.createClass(
{
    render()
    {
        return (
            <div className="col-xs-12">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h4>Youtube</h4>
                    <Player className="videoPlayer">
                        <source src="https://www.youtube.com/watch?v=UGtKGX8B9hU&t=7s" />
                    </Player>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h4>Vimeo</h4>
                    <Player className="videoPlayer">
                        <source src="https://vimeo.com/17950038" />
                    </Player>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h4>Dailymotion</h4>
                    <Player className="videoPlayer">
                        <source src="http://www.dailymotion.com/video/ximmst_le-vent-par-un-brassens-qui-ressemble-plus-a-jean-ferrat_music" />
                    </Player>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h4>Facebook</h4>
                    <Player className="videoPlayer">
                        <source src="https://www.facebook.com/facebook/videos/10155008726816729/" />
                    </Player>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h4>Other</h4>
                    <Player className="videoPlayer">
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>
                </div>
            </div>
        );
    }
});

module.exports = VideoReactTest;
