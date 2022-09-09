import React from "react";
import { useState } from "react";
import { Messages } from "../Messages/Messages";
import { Posts } from "../Posts/Posts";
import { articles } from "../../../../assets/data/articles";
import { profiles } from "../../../../assets/data/admin-data";

export const LowerBlock = ({}) => {
  const [view, setView] = useState(1);
  return (
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
  );
};
