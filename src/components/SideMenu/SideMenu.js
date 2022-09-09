import React, { useContext, useState } from "react";
import { SiteContext } from "../../context/Context";
import "./SideMenu.css";
import { useLocation } from "react-router-dom";
import messages from "./messages.png";
import cases from "./cases.png";
import overview from "./overview.png";
import users from "./users.png";
import board from "./board.png";
import logout from "./logout.png";
import bulletin from "./bulletin.png";
import news from "./news.png";
import { profiles } from "../../assets/data/admin-data";
import { useEffect } from "react";

export const SideMenu = ({ state }) => {
  let location = useLocation();

  const {
    show,
    toggleShow,
    articlesList,
    profile,
    user,
    sideBarView,
    setSideBarView,
    fetchProfile,
    setUser,
  } = useContext(SiteContext);

  useEffect(() => {
    if (user?.token) {
      fetchProfile(user?.token);
    }
  }, [user?.token]);

  if (location.pathname !== "/profile" || !user?.logged) {
    return null;
  }

  console.log(profile);

  return (
    <div className={show ? "SideMenu sm-small-show" : "SideMenu sm-small-hide"}>
      <div className="SideMenu-options">
        <div className="SM-profile-info">
          <div className="SM-avatar">
            <img src={profile.avatar} alt="avatar-pic" />
          </div>
          <div className="SM-details">
            <div className="SM-Name">{profile.name}</div>
            <div className="SM-permission">
              <small>Admin</small>
            </div>
          </div>
        </div>
        <div className="SM Menu">
          <h3>Menu</h3>
          <div className="SM-menu">
            <div
              onClick={() => {
                setSideBarView("overview");
              }}
              className={
                sideBarView === "overview"
                  ? "SM-menu-item sm-selected"
                  : "SM-menu-item"
              }
            >
              <img src={overview} alt="" style={{ width: "28px" }} />
              Overview
            </div>
            <div
              onClick={() => {
                setSideBarView("messages");
              }}
              className={
                sideBarView === "messages"
                  ? "SM-menu-item sm-selected"
                  : "SM-menu-item"
              }
            >
              <div className="message-text">
                {" "}
                <img src={messages} alt="" style={{ width: "28px" }} />
                Messages
              </div>
              <div className="sm-count">
                {" "}
                <div>{profile.messages.length}</div>
              </div>
            </div>
            <div
              onClick={() => {
                setSideBarView("posts");
              }}
              className={
                sideBarView === "posts"
                  ? "SM-menu-item sm-selected"
                  : "SM-menu-item"
              }
            >
              <img src={cases} alt="" style={{ width: "28px" }} />
              Posts
            </div>
            <div
              onClick={() => {
                setSideBarView("account");
              }}
              className={
                sideBarView === "account"
                  ? "SM-menu-item sm-selected"
                  : "SM-menu-item"
              }
            >
              <img src={users} alt="" style={{ width: "28px" }} />
              Account
            </div>
            <div
              onClick={() => {
                setSideBarView("board");
              }}
              className={
                sideBarView === "board"
                  ? "SM-menu-item sm-selected"
                  : "SM-menu-item"
              }
            >
              <img src={board} alt="" style={{ width: "28px" }} />
              Board
            </div>

            <div
              onClick={() => {
                localStorage.removeItem("token");
                setUser(null);
              }}
              className="SM-menu-item"
            >
              <img src={logout} alt="" style={{ width: "28px" }} />
              Logout
            </div>
          </div>
        </div>
        <div className="SM footnotes">
          <h3>Footnotes</h3>
          <div className="SM-menu">
            <div className="SM-menu-item">
              <img src={bulletin} alt="" style={{ width: "28px" }} />
              Case 450
            </div>
            <div className="SM-menu-item">
              <img src={bulletin} alt="" style={{ width: "28px" }} />
              Case 454
            </div>

            <div className="SM-menu-item">
              <img src={news} alt="" style={{ width: "28px" }} />
              Note #Article review
            </div>

            <div className="SM-menu-item">
              <img src={news} alt="" style={{ width: "28px" }} />
              Monthly review
            </div>
          </div>
          <div className="footnotes-add">
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
