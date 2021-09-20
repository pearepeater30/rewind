import React from 'react';
import '../styles/AudioPlayer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
  
const AudioPlayer = () => {
  return (
    <div>
      <div class = "info">
        <p>Audio Player</p>
      </div>
      <div className="player-controller">
        <button id="play-icon"><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></button>
        <span id="current-time" class="time">0:00</span>
        <input type="range" id="seek-slider" max="100" value="0" />
        <span id="duration" class="time">0:00</span>
        <input type="range" id="volume-slider" max="100" value="100" />
      </div>
    </div>
  )
  
}

export default AudioPlayer;