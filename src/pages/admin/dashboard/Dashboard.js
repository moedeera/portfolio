import React, { useContext } from "react";
import { SiteContext } from "../../../context/Context";
import "../Admin.css";
import "./Dashboard.css";

export const Dashboard = () => {
  const { toggleShow, show } = useContext(SiteContext);
  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
        <div className="dashboard-button">
          {show ? (
            <>
              <i
                className="fas fa-times"
                onClick={() => {
                  toggleShow(false);
                }}
              ></i>
            </>
          ) : (
            <>
              <i
                className="fas fa-bars"
                onClick={() => {
                  toggleShow(true);
                }}
              ></i>
            </>
          )}
        </div>
        <div className="dashboard-header-block">
          <div>
            <h3>Hi John !</h3>
          </div>
          <div className="progress-bar-container">
            {" "}
            <small>15/30</small>
            <div className="progress-bar">
              <div className="dash-progress"></div>
            </div>
          </div>
        </div>

        <div className="upper-block">
          <div className="single-block" id="messages">
            Messages
          </div>
          <div className="single-block" id="cases">
            Cases
          </div>
          <div className="single-block" id="requests">
            Requests
          </div>
          <div className="single-block" id="articles">
            Articles
          </div>
        </div>
        <div className="lower-block">Lowe Hello</div>
      </div>

      <div className="dashboard-side">
        <div className="upper">Upper</div>
        <div className="mid-level">Midlevel</div>
        <div className="lower">Lower</div>
      </div>
    </div>
  );
};
