import React from "react";
import messages from "../icons/messages.png";
import { profiles } from "../../../../assets/data/admin-data";
import notification from "../icons/notification.png";
import cases from "../icons/case.png";
import { articles } from "../../../../assets/data/articles";
import { useState } from "react";
import { useContext } from "react";
import { SiteContext } from "../../../../context/Context";

export const UpperBlock = ({ view, profile }) => {
  return (
    <div className="upper-block">
      <div className="single-block" id="messages">
        <div className="content">
          {" "}
          <div className="content-icons">
            <div>
              <img src={messages} alt="logo" />
            </div>
          </div>
          <div className="content-message">
            {profile?.messages.length}
            {view === "overview"
              ? " Messages"
              : view === "messages"
              ? " New messages"
              : view === "posts"
              ? " New posts"
              : ""}
          </div>
          <div className="content-avatars">
            {profiles[0].messages.map(
              (msg, index) =>
                index < 4 && (
                  <img src={msg.avatar} alt="avatar-pic" key={msg.id} />
                )
            )}
          </div>
        </div>
      </div>

      <div className="single-block" id="cases">
        <div className="content">
          {" "}
          <div className="content-icons">
            <div>
              <img src={cases} alt="logo" />
            </div>
          </div>
          <div className="content-message">
            <>{articles.length} Posts</>
            <small>10 Published</small>
            <small>1 Draft</small>
          </div>
        </div>
      </div>

      <div className="single-block" id="requests">
        <div className="content">
          {" "}
          <div className="content-icons">
            <div>
              <img src={notification} alt="logo" />
            </div>
          </div>
          <div className="content-message">
            <>4 Pending Items</>
            <small>2 Comments</small>
            <small>1 Post approval</small>
          </div>
        </div>
      </div>

      <div className="single-block" id="articles">
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
  );
};
