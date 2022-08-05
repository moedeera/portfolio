import React from "react";
import "./videoplayer.css";
import ReactPlayer from "react-player";

export const Videoplayer = ({ link }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={link}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};
