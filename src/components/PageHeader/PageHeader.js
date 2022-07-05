import React from "react";
import "./PageHeader.css";

export const PageHeader = ({ tagline, header }) => {
  return (
    <>
      {" "}
      <div className="pp-upper-circles-dec">
        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up"></div>

        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up col1"></div>

        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up col1"></div>
        <div className="pp-dot pp-up col1"></div>

        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up col1"></div>
        <div className="pp-dot pp-up col1"></div>
        <div className="pp-dot pp-up col1"></div>

        <div className="pp-dot pp-up"></div>
        <div className="pp-dot pp-up col1"></div>
        <div className="pp-dot pp-up col1"></div>
        <div className="pp-dot pp-up col1"></div>
        <div className="pp-dot pp-up col1"></div>
      </div>
      <div className="pp-upper">
        <div className="pp-upper-container">
          <div className="pp-upper-text">
            <p>{tagline}</p>
            <h1>{header}</h1>
          </div>
          <div className="pp-upper-circles">
            <div className="pp-circle pp-upper-circle-1"></div>
            <div className="pp-circle pp-upper-circle-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};
