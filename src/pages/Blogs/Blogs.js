import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SiteContext } from "../../context/Context";
import "./Blogs.css";

export const Blogs = () => {
  const { articlesList } = useContext(SiteContext);

  return (
    <div className="blogs-page">
      <div className="bp-page main-container">
        <div className="blogs-upper-section">
          <div
            className="blogs-headliner"
            style={{ backgroundImage: `url(${articlesList[0].pic})` }}
          >
            <div className="blogs-overlay">
              <div className="blogs-container">
                <small className="blogs-topic">{articlesList[0].topic}</small>
                <div>
                  <div className="blogs-header">
                    <h3>{articlesList[0].header}</h3>
                  </div>
                  <div className="blogs-headline-details">
                    <small>
                      <i className="fas fa-user-alt"></i> Moe Deera
                    </small>
                    <small>
                      <i className="far fa-calendar"></i>
                      {articlesList[0].created}
                    </small>
                    <small>
                      <i className="far fa-comment-alt"></i>
                      No comments
                    </small>
                  </div>
                </div>
                <small>{articlesList[0].abstract}...</small>
              </div>
            </div>
          </div>
          <div>
            {/* <h3 className="bf-header">See Also</h3> */}
            <div className="blogs-features">
              {articlesList.map(
                (article, index) =>
                  index < 4 &&
                  index > 0 && (
                    <Link to={`./${article.title}`}>
                      <div className="blogs-features-item" key={index}>
                        <div className="bf-image">
                          <img
                            src={article.pic}
                            alt=""
                            // style={{ width: "100px" }}
                          />
                        </div>
                        <div className="bf-item">
                          <div>
                            <small className="blogs-topic-bf">
                              {article.topic}
                            </small>
                            <div className="bf-item-header">
                              {article.header}
                            </div>
                          </div>
                          <small className="bf-item-date">
                            {article.created}
                          </small>
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="blogs-lower-section">
          <div className="blogs-lower-list">
            <div className="bl-item">
              <div
                className="bl-item-image"
                style={{ backgroundImage: `url(${articlesList[5].pic})` }}
              ></div>
              <div className="bl-item-text">
                <div className="bl-item-topic">{articlesList[4].topic}</div>
                <div className="bl-item-date">
                  <small>{articlesList[4].created}</small>
                </div>
                <div className="bl-item-header">{articlesList[4].header}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
