import React from "react";
import posts from "../icons/case.png";

export const Posts = ({ profile }) => {
  return (
    <>
      <div className="overview-box-container">
        {" "}
        {profile.map(
          (post) =>
            post.status && (
              <div className="overview-box-item">
                <div className="overview-item-main">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="vehicle1"
                    value="Bike"
                  />
                  <div
                    className="overview-item-icon"
                    style={
                      post.topic === "Educational"
                        ? { backgroundColor: "blue" }
                        : post.topic === "Economy"
                        ? { backgroundColor: "green" }
                        : // : post.topic === "General"
                          // ? { backgroundColor: "goldenrod" }
                          {}
                    }
                  >
                    <img src={posts} alt="" />
                  </div>
                  <div className="overview-item-details">
                    <h3>{post.header}</h3>
                    <small>{post.abstractSM}</small>
                  </div>
                </div>
                <div className="overview-item-images">
                  <div className="overview-item-details">
                    <small> {post.created}</small>
                  </div>{" "}
                  <img src={post.pic} alt={`${post.header}`} />
                </div>
              </div>
            )
        )}
      </div>

      <div className="bottom-overview-header">
        <h3>Drafts</h3>{" "}
      </div>
      <div className="overview-box-container">
        {profile.map(
          (post) =>
            !post.status && (
              <div className="overview-box-item">
                <div className="overview-item-main">
                  <div
                    className="overview-item-icon"
                    style={
                      post.status === "sent"
                        ? { backgroundColor: "green" }
                        : {
                            backgroundColor: "grey",
                          }
                    }
                  >
                    <img src={posts} alt="" />
                  </div>
                  <div className="overview-item-details">
                    <h3>
                      {" "}
                      {post.status === "draft" && `(Draft): `} {post.header}
                    </h3>
                    <small>{post.abstractSM}</small>
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
