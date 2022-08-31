import React from "react";
import messages from "../icons/messages.png";

export const Messages = ({ profile }) => {
  return (
    <>
      <div className="overview-box-container">
        {" "}
        {profile.messages.map((msg) =>
          msg.status === "unread" || msg.status === "read" ? (
            <div className="overview-box-item">
              <div className="overview-item-main">
                <div
                  className="overview-item-icon"
                  style={
                    msg.status === "unread"
                      ? { backgroundColor: "green" }
                      : { backgroundColor: "grey" }
                  }
                >
                  <img src={messages} alt="" />
                </div>
                <div className="overview-item-details">
                  <h3>{msg.subject}</h3>
                  <small>{msg.message}</small>
                </div>
              </div>
              <div className="overview-item-images">
                {" "}
                <img src={msg.avatar} alt={`${msg.subject}`} />
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>

      <div className="bottom-overview-header">
        <h3>Outbox</h3>{" "}
      </div>
      <div className="overview-box-container">
        {profile.messages.map(
          (msg) =>
            (msg.status === "sent" || msg.status === "draft") && (
              <div className="overview-box-item">
                <div className="overview-item-main">
                  <div
                    className="overview-item-icon"
                    style={
                      msg.status === "sent"
                        ? { backgroundColor: "green" }
                        : {
                            backgroundColor: "grey",
                          }
                    }
                  >
                    <img src={messages} alt="" />
                  </div>
                  <div className="overview-item-details">
                    <h3>
                      {" "}
                      {msg.status === "draft" && `(Draft): `} {msg.subject}
                    </h3>
                    <small>{msg.message}...</small>
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
            )
        )}
      </div>
    </>
  );
};
