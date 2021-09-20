import React, { useState } from "react";
import "../styles/AudioPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="seek-slider-group">
        <input type="range" className="seek-slider"/>
      </div>
      <div className="player-controller">
        <button><FontAwesomeIcon icon={faBackward} /></ button>
        <button onClick={togglePlayPause} id="play-icon">
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
          )}
        </button>
        <button><FontAwesomeIcon icon={faForward} /></button>
        <span id="current-time" class="time">
          0:00
        </span>
        /
        <span id="duration" class="time">
          0:00
        </span>
        
        <input type="range" id="volume-slider" max="100" value="100" />
      </div>
    </div>
  );
};

export default AudioPlayer;
