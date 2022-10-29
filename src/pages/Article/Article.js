import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { SiteContext } from "../../context/Context";
import "./BlogArticle.css";
import icon from "../Blogs/blogsIcon.png";
import pic01 from "../Blog/portfolio-v1.png";
import pic02 from "../Blog/portfolio-v2.5.png";
import pic03 from "../Blog/portfolio-v3.png";
import pic04 from "../Blog/server0.png";
import pic05 from "../Blog/server1.png";
import pic06 from "../Blog/server2.png";
import { Link } from "react-router-dom";
import { Videoplayer } from "../../components/videoplayer/videoplayer";
import { TwitterShareButton } from "react-twitter-embed";
import { blogImages } from "../../assets/data/images/index.js";

import avatar from "./avatar.jpg";
import ReactEmbedGist from "react-embed-gist";
const articleImages = [pic02, pic01, pic03, pic04, pic05, pic06];
export const Article = () => {
  const { id } = useParams();
  let post = id;
  console.log(post);
  const { getArticle, articlesList } = useContext(SiteContext);
  const article = useMemo(() => {
    return getArticle(post);
  }, [post, getArticle]);
  return (
    <div className="article-page">
      <div className="main">
        <div className="blog-article-container">
          <div className="articles-header">
            <h5>
              {" "}
              <Link to={"../blog"}>
                <span style={{ color: "black" }}>Blog {`>`}</span>
              </Link>{" "}
              {article.topic}
            </h5>
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
            <img src={blogImages[article?.id]?.article} alt="" />
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
              {article?.mapper?.map((map) => (
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

                  {article.code[map] && article.code[map] !== null && (
                    <div className="code">
                      <div className="code-upper"></div>

                      <div className="code-container">
                        {`
${article.code[map]}

`}
                      </div>

                      {/* <ReactEmbedGist
                        gist="msaracevic/5d757e2fc72482a9a4a439969500c2eb"
                        wrapperClass="gist__bash"
                        loadingClass="loading__screen"
                        titleClass="gist__title"
                        errorClass="gist__error"
                        contentClass="gist__content"
                      /> */}
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
      </div>
      <div className="sidenav right">
        <div className="sr-search">
          <div className="sr-header">
            <h1>
              Rocket
              <span style={{ color: "purple" }}>Blog</span>
              <img
                style={{
                  width: "50px",
                }}
                src={icon}
                alt="icon"
              />
            </h1>
          </div>
          <h2> Featured Video</h2>
          <Videoplayer link={"https://www.youtube.com/watch?v=NdNZZ-UGAU0"} />
        </div>
        {/* <div className="sr-bio">
          <div className="sr-bio-name">
            <img src={avatar} alt="" />
            <div className="sr-bio-text">
              <h3> Moe Deera</h3>
              <p>Junior Web Developer</p>
              <small>Coding Enthusiast</small>
            </div>
          </div>
          <div className="sr-bio-links">
            <button className="bio-links-btn">Message</button>
            <i className="fa fa-twitter fa-2x"></i>
            <i className="fa fa-github fa-2x"></i>
            <i className="fa fa-medium fa-2x"></i>
          </div>
          <div></div>
        </div> */}
        <div className="sr-suggestions">
          <h3>See Also</h3>
          <div className="sr-suggestion">
            <div className="sr-suggestion-text">
              <small className="sr-suggestion-date"></small>
              <h3>8 Must have CSS tricks</h3>
              <small>
                Lorem ipsum dolor sit amet. Et delectus ullam ab sunt
                consequatur et eveniet maxime.
              </small>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
              className="suggestions-image"
            ></div>
          </div>

          <div className="sr-suggestion">
            <div className="sr-suggestion-text">
              <small className="sr-suggestion-date"></small>
              <h3>3 Ways to Authenticate in react</h3>
              <small>
                Lorem ipsum dolor sit amet. Et delectus ullam ab sunt
                consequatur et eveniet maxime.
              </small>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
              className="suggestions-image"
            ></div>
          </div>

          <div className="sr-suggestion">
            <div className="sr-suggestion-text">
              <small className="sr-suggestion-date"></small>
              <h3>Lessons from my first Interview</h3>
              <small>
                Lorem ipsum dolor sit amet. Et delectus ullam ab sunt
                consequatur et eveniet maxime.
              </small>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
              className="suggestions-image"
            ></div>
          </div>

          <div className="sr-suggestion">
            <div className="sr-suggestion-text">
              <small className="sr-suggestion-date"></small>
              <h3>Lessons from my first Interview</h3>
              <small>
                Lorem ipsum dolor sit amet. Et delectus ullam ab sunt
                consequatur et eveniet maxime.
              </small>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
              className="suggestions-image"
            ></div>
          </div>
        </div>

        <div className="search-input">
          <i className="fas fa-search"></i>
          <input placeholder="Search " />
        </div>
      </div>
    </div>
  );
};
