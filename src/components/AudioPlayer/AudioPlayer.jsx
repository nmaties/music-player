import React, { Component } from 'react';
import './AudioPlayer.css';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      duration: 0,
      interval: null
    };

    this.player = React.createRef();
  }

  formatCurrentTime = (time) => new Date(time * 1000).toISOString().substr(11, 8);

  getCurrentDuration = () => {
    this.setState({
      duration: this.player.current.currentTime
    })
  };

  play = () => {
    this.setState({
      play: true,
      interval: setInterval(this.getCurrentDuration, 1000)
    });
    this.player.current.play();
  };

  pause = () => {
    clearInterval(this.state.interval);
    this.setState({
      play: false,
      interval: null
    });
    this.player.current.pause();
  };

  setVolume = (evt) => {
    let nodeVal = evt.target.value / 100;
    this.player.current.volume = nodeVal;
  };

  render() {
    return (
        <div>
          <audio ref={this.player}>
            <source src={this.props.song.songLink}/>
          </audio>
          <div className="col-md-12 row">
            <div className="audio-controls col-md-6">
          <span className="btn btn-default">
            <i className={`fas fa-play ${this.state.play ? 'filled-icon' : ''}`}
               onClick={this.play}></i>
          </span>
              <span className="btn btn-default">
            <i className={`fas fa-pause ${!this.state.play ? 'filled-icon' : ''}`}
               onClick={this.pause}></i>
          </span>
            </div>
            <div className="col-md-6">
          <span>
              <input type="range" className="slider" onChange={this.setVolume}
                     name="volume" min="0" max="100" step="1"/>
          </span>
            </div>
          </div>
          {this.state.play &&
          <div className="col-md-12 row">
            <div className="col-md-6">{this.formatCurrentTime(this.state.duration)}</div>
            <div className="audio-duration col-md-6 audio-visualizer"></div>
          </div>}
        </div>
    );
  }
}

export default AudioPlayer;
