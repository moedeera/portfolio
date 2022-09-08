import React, { useContext, useState } from "react";
import { SiteContext } from "../../context/Context";
import "./SideMenu.css";
import { useLocation } from "react-router-dom";
import messages from "./messages.png";
import cases from "./cases.png";
import overview from "./overview.png";
import users from "./users.png";
import board from "./board.png";
import bulletin from "./bulletin.png";
import news from "./news.png";
import { profiles } from "../../assets/data/admin-data";

export const SideMenu = ({ state }) => {
  let location = useLocation();

  const { show, toggleShow, articlesList, user } = useContext(SiteContext);

  if (location.pathname !== "/profile" || !user?.name) {
    return null;
  }

  return (
    <div className={show ? "SideMenu sm-small-show" : "SideMenu sm-small-hide"}>
      <div className="SideMenu-options">
        <div className="SM-profile-info">
          <div className="SM-avatar">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
              alt="avatar-pic"
            />
          </div>
          <div className="SM-details">
            <div className="SM-Name">John Smith</div>
            <div className="SM-permission">
              <small>Admin</small>
            </div>
          </div>
        </div>
        <div className="SM Menu">
          <h3>Menu</h3>
          <div className="SM-menu">
            <div className="SM-menu-item">
              <img src={overview} alt="" style={{ width: "28px" }} />
              Overview
            </div>
            <div className="SM-menu-item sm-messages">
              <div className="message-text">
                {" "}
                <img src={messages} alt="" style={{ width: "28px" }} />
                Messages
              </div>
              <div className="sm-count">
                {" "}
                <div>{profiles[0].messages.length}</div>
              </div>
            </div>
            <div className="SM-menu-item">
              <img src={cases} alt="" style={{ width: "28px" }} />
              Posts
            </div>
            <div className="SM-menu-item">
              <img src={users} alt="" style={{ width: "28px" }} />
              Users
            </div>
            <div className="SM-menu-item">
              <img src={board} alt="" style={{ width: "28px" }} />
              Board
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
