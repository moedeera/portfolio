import React, { useContext } from "react";
import { SiteContext } from "../../../context/Context";
import "../Admin.css";
import "./Dashboard.css";
import messages from "./icons/messages.png";
import notification from "./icons/notification.png";

export const Dashboard = () => {
  const { toggleShow, show } = useContext(SiteContext);
  return (
    <>
      <div className="menuTopBar">
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

        <div className="SM-avatar">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
            alt="avatar-pic"
          />
        </div>
      </div>
      <div className="dashboard-container">
        <div className="dashboard-main">
          <div className="dashboard-header-block">
            <div className="dashboard-header-name">
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
              <div className="curve first-curve"></div>
              <div className="content">
                {" "}
                <div className="content-icons">
                  <div>
                    <img src={messages} alt="logo" />
                  </div>
                  <div>
                    <img src={notification} alt="logo" />
                  </div>
                </div>
                <div className="content-message">Your have 3 messages</div>
                <div className="content-avatars">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                    alt="avatar-pic"
                  />
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                    alt="avatar-pic"
                  />
                </div>
              </div>
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
      </div>{" "}
    </>
  );
};
