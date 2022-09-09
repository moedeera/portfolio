import React, { useContext, useEffect } from "react";
import { SiteContext } from "../../../context/Context";
import "../Admin.css";
import "./Dashboard.css";

import { UpperBlock } from "./View/UpperBlock";

import { LowerBlock } from "./View/LowerBlock";

export const Dashboard = () => {
  const { toggleShow, show, user, profile, fetchProfile } =
    useContext(SiteContext);

  useEffect(() => {
    if (user?.token) {
      fetchProfile(user?.token);
    }
  }, [user?.token]);

  console.log(profile);
  //toggle view

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
          <img src={profile?.avatar} alt="avatar-pic" />
        </div>
      </div>
      <div className="dashboard-container">
        <div className="dashboard-main">
          <div className="dashboard-header-block">
            <div className="dashboard-header-name">
              <h3>Hi {profile?.name} !</h3>
            </div>
            <div className="progress-bar-container">
              {" "}
              <small>15/30</small>
              <div className="progress-bar">
                <div className="dash-progress"></div>
              </div>
            </div>
          </div>

          <UpperBlock view={"overview"} />

          <LowerBlock />
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
              <input placeholder="New Reminder" type="text" />
              <small>Reminder date</small>
              <input placeholder="New Reminder" type="text" />
              <button className="btn-admin">Add </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
