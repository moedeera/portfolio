import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { SiteContext } from "../../context/Context";
import "./Article.css";
import { Link } from "react-router-dom";

import pic1 from "../Blog/recession.jpg";
import pic2 from "../Blog/webflow.jpg";
import pic3 from "../Blog/design.jpg";
import pic4 from "../Blog/progress.jpg";
import pic5 from "../Blog/pbuddies.jpg";
import pic6 from "../Blog/php.jpg";
import pic7 from "../Blog/MERN.jpg";
import pic01 from "../Blog/portfolio-v1.png";
import pic02 from "../Blog/portfolio-v2.5.png";
import pic03 from "../Blog/portfolio-v3.png";
import pic04 from "../Blog/server0.png";

import { articles } from "../../assets/data/articles";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];
const articleImages = [pic02, pic01, pic03, pic04];

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
              <div style={{ marginTop: "20px" }}>
                {" "}
                {article.paragraph1.split("\n").map((i, key) => {
                  return (
                    <div style={{ marginTop: "10px" }} key={key}>
                      {i}
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: "20px" }}>
                <img
                  src={article.picture1}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
                {article.picture01 && (
                  <>
                    <img
                      src={articleImages[article.picture01]}
                      alt=""
                      style={{
                        width: "100%",
                      }}
                    />
                    <small>{article.img1Title}</small>
                  </>
                )}
              </div>
              <div style={{ margin: "10px 0" }}>{article.paragraph2}</div>
              <img
                src={article.picture2}
                alt=""
                style={{
                  width: "100%",
                }}
              />
              {article.picture01 && (
                <>
                  <img
                    src={articleImages[article.picture02]}
                    alt=""
                    style={{
                      width: "100%",
                    }}
                  />
                  <small>{article.img1Title}</small>
                </>
              )}
              <div style={{ margin: "20px 0" }}>{article.paragraph3}</div>
              {article.picture01 && (
                <>
                  <img
                    src={articleImages[article.picture03]}
                    alt=""
                    style={{
                      width: "100%",
                      border: "1px solid grey",
                    }}
                  />
                  <small>{article.img3Title}</small>
                </>
              )}
            </div>
          </div>
          <Link to="../blog">
            <div className="go-back">
              <small>
                Other blogs{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </small>
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
              <Link style={{ color: "black" }} to="../contact">
                <button className="btn-follow">Contact</button>{" "}
              </Link>
            </div>
            <div className="sidebar-posts">
              <h2> See Also</h2>
              <div className="sidebar-posts-list">
                {articlesList.map(
                  (post) =>
                    post.id !== article.id && (
                      <div className="sidebar-post">
                        <div className="sidebar-post-image">
                          <Link to={`../blog/${post.title}`}>
                            <img
                              alt=""
                              src={images[post.id]}
                              style={{
                                width: "150px",
                                // maxWidth: "150px",
                              }}
                            />
                          </Link>
                        </div>
                        <div className="side-bar-post-text">
                          <Link
                            to={`../blog/${post.title}`}
                            style={{ color: "black" }}
                          >
                            <h3>{post.header}</h3>
                          </Link>
                          <p>{post.date}</p>
                        </div>
                      </div>
                    )
                )}
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
