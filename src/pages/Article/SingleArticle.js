import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { SiteContext } from "../../context/Context";
import "./Article.css";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

import { Videoplayer } from "../../components/videoplayer/videoplayer";
import { TwitterShareButton } from "react-twitter-embed";
import { blogImages } from "../../assets/data/images/index.js";

import pic1 from "../Blog/recession.jpg";
import pic2 from "../Blog/webflow.jpg";
import pic3 from "../Blog/design.jpg";
import pic4 from "../Blog/progress.jpg";
import pic5 from "../Blog/pbuddies.jpg";
import pic6 from "../Blog/php.jpg";
import pic7 from "../Blog/MERN.jpg";
import pic9 from "../Blog/codingjourney.jpg";
import pic10 from "../Blog/layoffs.jpg";
import pic11 from "../Blog/csstips.jpg";
import pic12 from "../Blog/5-css.jpg";
import pic01 from "../Blog/portfolio-v1.png";
import pic02 from "../Blog/portfolio-v2.5.png";
import pic03 from "../Blog/portfolio-v3.png";
import pic04 from "../Blog/server0.png";
import pic05 from "../Blog/server1.png";
import pic06 from "../Blog/server2.png";
import pic07 from "../Blog/php-meme.jpg";

import avatar from "./avatar.png";

const images = [
  pic12,
  pic11,
  pic10,
  pic9,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
];
const articleImages = [pic02, pic01, pic03, pic04, pic05, pic06, pic07];

export const SingleArticle = () => {
  const { post } = useParams();

  const { getArticle, articlesList } = useContext(SiteContext);

  const article = useMemo(() => {
    return getArticle(post);
  }, [post, getArticle]);

  console.log(articlesList);
  console.log(article.code);
  return (
    <div className="article-page">
      <MetaTags>
        <title>{article.header}</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={article.header} />
        <meta property="twitter:image" content={blogImages[article.id]} />
      </MetaTags>

      <div className="article-container">
        <div className="article-page-container">
          <div className="articles-header">
            <h5>{article.topic}</h5>
            <h1>{article.header}</h1>
            <p>{article.abstract}</p>
            <div className="article-time">
              <small>Published on 8th {article.created} at 8:30 PM EDT</small>
              <i className="fas fa-circle article-update-sm"></i>
              <small className="article-update-sm">
                Updated on 12th {article.updated}at 4:55 pm EDT
              </small>
            </div>
          </div>
          <div className="articles-image">
            <img src={blogImages[article.id].article} alt="" />
            <div className="article-details">
              <div className="avatar-pic">
                <img src={avatar} alt="" />
                <div className="articles-author">
                  <h3>Moe Deera</h3>
                  <small style={{ color: "steelblue" }}>@deeracode</small>
                </div>
              </div>

              <div className="articles-social-media">
                <TwitterShareButton
                  url={`https://www.moedevelops.com/blog/${article.title}`}
                  options={{ text: `${article.header}`, via: "moedevelops" }}
                />
              </div>
            </div>
            <div className="articles-text">
              {article.mapper.map((map) => (
                <div>
                  <h3>{article.headers[map]}</h3>
                  <p>{article.paragraphs[map]}</p>
                  {articleImages[article.pictures[map]] && (
                    <div
                      className="image-container"
                      style={{
                        margin: " 20px 0",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={articleImages[article.pictures[map]]}
                        alt=""
                        style={{
                          width: "100%",
                          border: "1px solid lightgrey",
                        }}
                      />
                      <small>{article.picCaption[map]}</small>
                    </div>
                  )}

                  {article.videos.length > 1 && (
                    <Videoplayer link={article.videos[map]} />
                  )}

                  {article.code[map] && article.code[map] !== null && (
                    <div className="code">
                      <div className="code-upper">
                        {/* <button>Copy</button>
                    <button>
                      JS fiddle <i className="fab fa-jsfiddle"></i>
                    </button> */}
                      </div>

                      <div className="code-container">
                        {`
${article.code[map]}

`}
                        {/* <span style={{color:'yellow'}}>{`<styles>`}</span>  */}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Link style={{ color: "black" }} to="../blog">
            <div className="go-back">
              <button className="btn-follow">Back</button>{" "}
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
              <h2> Featured Video</h2>

              <Videoplayer link={article.feature} />

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
                              src={blogImages[post.id].article}
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
                            <h5>{post.topic}</h5>
                            <h3>{post.header}</h3>
                            <small>{post.abstractSM}</small>
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
