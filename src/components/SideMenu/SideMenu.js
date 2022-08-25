import React, { useContext, useState } from "react";
import { SiteContext } from "../../context/Context";
import "./SideMenu.css";
import { useLocation } from "react-router-dom";

export const SideMenu = ({ state }) => {
  let location = useLocation();
  const { show, toggleShow } = useContext(SiteContext);

  if (location.pathname !== "/profile") {
    return null;
  }

  return (
    <div className={show ? "SideMenu sm-small-show" : "SideMenu sm-small-hide"}>
      <div className="SideMenu-options">
        <div className="SM-close-button">
          <i
            className="fas fa-times"
            onClick={() => {
              toggleShow(false);
            }}
          ></i>
        </div>
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
              <i className="far fa-clipboard"></i>
              Overview
            </div>
            <div className="SM-menu-item sm-messages">
              <div className="message-text">
                {" "}
                <i className="far fa-envelope"></i>
                Messages
              </div>
              <div className="sm-count"> 5</div>
            </div>
            <div className="SM-menu-item">
              <i className="fas fa-briefcase"></i>
              Cases
            </div>
            <div className="SM-menu-item">
              <i className="fas fa-users"></i>
              Users
            </div>
            <div className="SM-menu-item">
              <i className="far fa-list-alt"></i>
              Board
            </div>
          </div>
        </div>
        <div className="SM footnotes">
          <h3>Footnotes</h3>
          <div className="SM-menu">
            <div className="SM-menu-item">
              <i className="far fa-newspaper"></i>
              Case 450
            </div>
            <div className="SM-menu-item">
              <i className="far fa-newspaper"></i>
              Case 454
            </div>

            <div className="SM-menu-item">
              <i className="far fa-sticky-note"></i>
              Note #Article review
            </div>

            <div className="SM-menu-item">
              <i className="far fa-calendar"></i>
              Monthly review
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
