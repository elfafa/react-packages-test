'use strict';

import './Main.css';

import React from 'react-native';
import { Video } from 'react-native-video';

var ReactNativeVideoTest = React.createClass(
{
    loadStart() {

    },
    onLoad() {

    },
    onProgress() {

    },
    onEnd() {

    },
    onError() {

    },
    onError() {

    },
    styles() {
        return StyleSheet.create({
            backgroundVideo: {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            },
        });
    },

    render() {
        return (
            <Video
                source={{ uri: "https://www.youtube.com/watch?v=UGtKGX8B9hU" }}   // Can be a URL or a local file.
                ref={(ref) => {
                  this.player = ref
                }}                             // Store reference
                rate={1.0}                     // 0 is paused, 1 is normal.
                volume={1.0}                   // 0 is muted, 1 is normal.
                muted={false}                  // Mutes the audio entirely.
                paused={false}                 // Pauses playback entirely.
                resizeMode="cover"             // Fill the whole screen at aspect ratio.
                repeat={true}                  // Repeat forever.
                playInBackground={false}       // Audio continues to play when app entering background.
                playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown.
                progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
                onLoadStart={this.loadStart}   // Callback when video starts to load
                onLoad={this.onLoad}      // Callback when video loads
                onProgress={this.onProgress}      // Callback every ~250ms with currentTime
                onEnd={this.onEnd}             // Callback when playback finishes
                onError={this.onError}      // Callback when video cannot be loaded
                onBuffer={this.onBuffer} // Callback when remote video is buffering
                style={this.styles}
            />
        );
    }
});

module.exports = ReactNativeVideoTest;
