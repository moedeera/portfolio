import React, { useContext } from "react";
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
            style={{ backgroundImage: `url(${articlesList[3].pic})` }}
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
                  index < 4 && (
                    <div className="blogs-features-item">
                      <div className="bf-image">
                        <img
                          src={article.pic}
                          alt=""
                          // style={{ width: "100px" }}
                        />
                      </div>
                      <div className="bf-item">
                        <small className="blogs-topic-bf">
                          {article.topic}
                        </small>
                        <div className="bf-item-header">{article.header}</div>
                        <small div className="bf-item-date">
                          {article.created}
                        </small>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="blogs-lower-section"></div>
      </div>
    </div>
  );
};
