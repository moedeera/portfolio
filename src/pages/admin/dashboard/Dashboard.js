import React, { useContext, useEffect, useState } from "react";
import { SiteContext } from "../../../context/Context";
import "../Admin.css";
import "./Dashboard.css";
import messages from "./icons/messages.png";
import { articles } from "../../../assets/data/articles";
import notification from "./icons/notification.png";
import cases from "./icons/case.png";
import request from "./icons/request.png";
import shield from "./icons/shield.png";
import { profiles } from "../../../assets/data/admin-data";
import { Messages } from "./Messages/Messages";
import { Posts } from "./Posts/Posts";
import axios from "axios";

export const Dashboard = () => {
  const { toggleShow, show, message } = useContext(SiteContext);
  // fetch date
  const [inbox, setInbox] = useState("");
  const onFetch = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get(
        "https://auction-website89.herokuapp.com/bids/message",
        config
      );
      console.log(res.data);

      setInbox(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  //toggle view

  const [view, setView] = useState(1);

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
              <h3>Hi {profiles[0].name} !</h3>
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
                <div className="content-message">
                  {profiles[0].messages.length} messages
                </div>
                <div className="content-avatars">
                  {profiles[0].messages.map((msg) => (
                    <img
                      src={msg.avatar}
                      alt="avatar-pic"
                      key={profiles[0].messages.id}
                    />
                  ))}
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
                <div className="content-message"> {articles.length} Posts</div>
                <div className="content-avatars">
                  {articles.map(
                    (post, index) =>
                      index < 5 && (
                        <img key={post.id} src={post.pic} alt="avatar-pic" />
                      )
                  )}
                  <i className="fa fa-plus" aria-hidden="true"></i>
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
                <div className="content-message">4 Pending Comments</div>
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
                <div className="content-message">5 To-dos</div>
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
                <div
                  className={view === 1 ? "selected-option" : ""}
                  onClick={() => {
                    setView(1);
                  }}
                >
                  Messages
                </div>
                <div
                  className={view === 2 ? "selected-option" : ""}
                  onClick={() => {
                    setView(2);
                  }}
                >
                  Posts
                </div>
                <div
                  className={view === 3 ? "selected-option" : ""}
                  onClick={() => {
                    setView(3);
                  }}
                >
                  Requests
                </div>
              </div>
              <div className="dashboard-search">Search</div>
            </div>
            <div className="lower-bottom">
              <div className="bottom-overview-header">
                <h3>Recent</h3>{" "}
              </div>
              {view === 1 ? (
                <Messages profile={profiles[0]} />
              ) : (
                <Posts profile={articles} />
              )}
            </div>
          </div>
        </div>

        <div className="dashboard-side">
          <div className="ds-upper">
            <div className="ds-side-main">
              <h3>Today's Schedule</h3>
              <div>
                {" "}
                <i className="fa fa-calendar"></i>
              </div>
            </div>

            <div className="ds-side-main">
              <div>
                <h5>Case 459B-X</h5>
                <h3>Micheal Jones</h3>
              </div>

              <div className="">
                {" "}
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                  alt="avatar-pic"
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    border: "3px solid white",
                  }}
                />
              </div>
            </div>

            <div className="dashboard-view-button">
              <button className="btn-admin"> View</button>
            </div>
          </div>
          <div className="ds-mid-level">
            <div className="stats-header">
              <h3>Stats</h3>
              <small>Updated August 2022</small>
            </div>
            <div className="stats-container">
              <div className="stat-unit">
                <h5>Published</h5>
                <h2>115</h2>
              </div>

              <div className="stat-unit">
                <h5>In Progress</h5>
                <h2>24</h2>
              </div>

              <div className="stat-unit">
                <h5>Users</h5>
                <div className="stat-users">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                    alt="avatar-pic"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      border: "3px solid white",
                    }}
                  />
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                    alt="avatar-pic"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      border: "3px solid white",
                    }}
                  />
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                    alt="avatar-pic"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      border: "3px solid white",
                    }}
                  />
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
                    alt="avatar-pic"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      border: "3px solid white",
                    }}
                  />
                  <h2>4</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="ds-lower">
            <div className="ds-form">
              <div className="ds-header">
                <h3>Create New Reminder</h3>

                <i className="fas fa-ellipsis-h"></i>
              </div>

              <small>Reminder title</small>
              <input placeholder="New Reminder" type="text" value="" />
              <small>Reminder date</small>
              <input placeholder="New Reminder" type="text" value="" />
              <button className="btn-admin">Add </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
