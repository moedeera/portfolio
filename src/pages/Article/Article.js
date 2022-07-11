import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { SiteContext } from "../../context/Context";
import "./Article.css";
import { Link } from "react-router-dom";

import pic1 from "./recession.jpg";
import pic2 from "./design.jpg";
import pic3 from "./progress.jpg";
import pic4 from "./pbuddies.jpg";

const images = [pic1, pic2, pic3];

export const Article = () => {
  const { post } = useParams();

  const { getArticle, articlesList } = useContext(SiteContext);

  const article = useMemo(() => {
    return getArticle(post);
  }, [post, getArticle]);

  console.log(articlesList);
  return (
    <div className="article-page">
      <div className="article-container">
        <div className="article-page-container">
          <div className="articles-header">
            <small>{article?.topic}</small>
            <h1>{article?.header}</h1>
            <p>{article?.abstract}</p>
          </div>
          <div className="articles-image">
            <img src={images[article.id]} alt="" />
            <div className="article-details">
              <div className="articles-author">
                <h3>Moe Deera</h3>
                <small>{article.date}</small>
              </div>
              <div className="articles-social-media">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </div>
            </div>
            <div className="articles-text">
              {/* {`${article.summary}`} */}
              {article.summary.split("\n").map((i, key) => {
                return (
                  <div style={{ marginTop: "10px" }} key={key}>
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
          <Link to="../blog">
            <div className="go-back">
              <small>Other blogs</small>
            </div>
          </Link>
        </div>
        <div className="article-sidebar">
          <div className="sidebar-container">
            <div className="side-bar-upper">
              <h3>
                Interested in submitting an article on this blog? just send me a
                message.
              </h3>
              <button className="btn-follow">Contact</button>
            </div>
            <div className="sidebar-posts">
              <h2> Recent Posts</h2>
              <div className="sidebar-posts-list">
                {articlesList.map((post) => (
                  <div className="sidebar-post">
                    <div className="sidebar-post-image">
                      <img
                        alt=""
                        src={post.pic1}
                        style={{
                          width: "150px",
                          // maxWidth: "150px",
                        }}
                      />
                    </div>
                    <div className="side-bar-post-text">
                      <h3>{post.header}</h3>
                      <p>{post.date}</p>
                    </div>
                  </div>
                ))}

                <div className="sidebar-post">
                  <div className="sidebar-post-image">
                    <img
                      alt=""
                      src={article.pic1}
                      style={{
                        width: "150px",
                      }}
                    />
                  </div>
                  <div className="side-bar-post-text">
                    <h3>Tech Recession effect on developers</h3>
                    <p>March 2022</p>
                  </div>
                </div>

                <div className="sidebar-post">
                  <div className="sidebar-post-image">
                    <img
                      alt=""
                      src={article.pic1}
                      style={{
                        width: "150px",
                      }}
                    />
                  </div>
                  <div className="side-bar-post-text">
                    <h3>Tech Recession effect on developers</h3>
                    <p>March 2022</p>
                  </div>
                </div>

                <div className="sidebar-post">
                  <div className="sidebar-post-image">
                    <img
                      alt=""
                      src={article.pic1}
                      style={{
                        width: "150px",
                      }}
                    />
                  </div>
                  <div className="side-bar-post-text">
                    <h3>Tech Recession effect on developers</h3>
                    <p>March 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-categories">
              <h2> Categories</h2>
              <div>Design</div>
              <div>Economy</div>
              <div>Learning</div>
              <div>Code</div>
              <div>Jobs</div>
              <div>Media</div>
            </div>
            <div className="sidebar-categories"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
