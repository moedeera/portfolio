import React, { useContext } from "react";
import { SiteContext } from "../../../context/Context";
import "../Admin.css";
import "./Dashboard.css";
import messages from "./icons/messages.png";

import notification from "./icons/notification.png";
import cases from "./icons/case.png";
import request from "./icons/request.png";
import shield from "./icons/shield.png";
// import case from "../../../components/SideMenu/cases.png";

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
                <div className="content-message">3 Unread messages</div>
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
              <div className="curve second-curve"></div>
              <div className="content">
                {" "}
                <div className="content-icons">
                  <div>
                    <img src={cases} alt="logo" />
                  </div>
                  <div>
                    <img src={notification} alt="logo" />
                  </div>
                </div>
                <div className="content-message">4 Unpublished Cases</div>
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

            <div className="single-block" id="requests">
              <div className="curve third-curve"></div>
              <div className="content">
                {" "}
                <div className="content-icons">
                  <div>
                    <img src={request} alt="logo" />
                  </div>
                  <div>
                    <img src={notification} alt="logo" />
                  </div>
                </div>
                <div className="content-message">4 Pending Requests</div>
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

            <div className="single-block" id="articles">
              <div className="curve fourth-curve"></div>
              <div className="content">
                {" "}
                <div className="content-icons"></div>
                <div className="content-message">5 Articles</div>
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
          </div>
          <div className="lower-block">
            <div className="lower-upper">
              <div className="lower-upper-sort">
                {" "}
                <div className="selected-option">Cases</div>
                <div>Articles</div>
                <div>Messages</div>
              </div>
              <div className="dashboard-search">Search</div>
            </div>
            <div className="lower-bottom">
              <div className="bottom-overview-header">
                <h3>Recent</h3>{" "}
              </div>
              <div className="overview-box-container">
                <div className="overview-box-item">
                  <div className="overview-item-main">
                    <div className="overview-item-icon">
                      <img src={messages} alt="" />
                    </div>
                    <div className="overview-item-details">
                      <h3>Re:Pending Article needs edit</h3>
                      <small>
                        Hey can you allow us to edit the impending article to
                        correct errors?
                      </small>
                    </div>
                  </div>
                  <div className="overview-item-images">
                    {" "}
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                      alt="avatar-pic"
                    />
                  </div>
                </div>

                <div className="overview-box-item">
                  <div className="overview-item-main">
                    <div
                      className="overview-item-icon"
                      style={{ backgroundColor: "crimson" }}
                    >
                      <img src={notification} alt="" />
                    </div>
                    <div className="overview-item-details">
                      <h3>Article Pending for publication</h3>
                      <small>
                        Hey can you allow us to edit the impending article to
                        correct errors?
                      </small>
                    </div>
                  </div>
                  <div className="overview-item-images">
                    {" "}
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                      alt="avatar-pic"
                    />
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

                <div className="overview-box-item">
                  <div className="overview-item-main">
                    <div
                      className="overview-item-icon"
                      style={{ backgroundColor: "goldenrod" }}
                    >
                      <img src={shield} alt="" />
                    </div>
                    <div className="overview-item-details">
                      <h3>Permission Upgrade Request</h3>
                      <small>
                        Hey can you allow us to edit the impending article to
                        correct errors?
                      </small>
                    </div>
                  </div>
                  <div className="overview-item-images">
                    {" "}
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                      alt="avatar-pic"
                    />
                  </div>
                </div>

                <div className="overview-box-item">
                  <div className="overview-item-main">
                    <div className="overview-item-icon">
                      <img src={messages} alt="" />
                    </div>
                    <div className="overview-item-details">
                      <h3>Meeting for this month</h3>
                      <small>
                        Hey can you allow us to edit the impending article to
                        correct errors?
                      </small>
                    </div>
                  </div>
                  <div className="overview-item-images">
                    {" "}
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                      alt="avatar-pic"
                    />
                  </div>
                </div>
              </div>
              <div className="bottom-overview-header">
                <h3>Upcoming</h3>{" "}
              </div>
              <div className="overview-box-container">
                <div className="overview-box-item">
                  <div className="overview-item-main">
                    <div
                      className="overview-item-icon"
                      style={{ backgroundColor: "green" }}
                    >
                      <img src={cases} alt="" />
                    </div>
                    <div className="overview-item-details">
                      <h3>Case 456-B Pending Publish</h3>
                      <small>
                        Hey can you allow us to edit the impending article to
                        correct errors?
                      </small>
                    </div>
                  </div>
                  <div className="overview-item-images">
                    {" "}
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                      alt="avatar-pic"
                    />
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

                <div className="overview-box-item">
                  <div className="overview-item-main">
                    <div className="overview-item-icon">
                      <img src={cases} alt="" />
                    </div>
                    <div className="overview-item-details">
                      <h3>Case 103-Z Pending Edit</h3>
                      <small>
                        Hey can you allow us to edit the impending article to
                        correct errors?
                      </small>
                    </div>
                  </div>
                  <div className="overview-item-images">
                    {" "}
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                      alt="avatar-pic"
                    />
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
            </div>
          </div>
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
