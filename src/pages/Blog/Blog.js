import React, { useContext } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import pic1 from "./recession.jpg";
import pic2 from "./webflow.jpg";
import pic3 from "./design.jpg";
import pic4 from "./progress.jpg";
import pic5 from "./pbuddies.jpg";
import pic6 from "./php.jpg";
import pic7 from "./MERN.jpg";
import pic8 from "./php-meme.jpg";
import { SiteContext } from "../../context/Context";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
export const Blog = () => {
  const { articlesList } = useContext(SiteContext);

  return (
    <div className="blog-page">
      <div className="blog-page-container">
        <div className="blog-header">
          <h1>The Blog</h1>
        </div>
        <div className="blog-headline-container">
          <div className="blog-headline-image">
            <Link to={`./${articlesList[0].title}`}>
              <img src={images[articlesList[0].id]} alt="" />
            </Link>
          </div>

          <div className="blog-headline-text">
            <div>
              <div className="blog-headline-date">
                <small>Published on {articlesList[0].created}</small>
              </div>
              <div className="blog-headline-title">
                <h2>{articlesList[0].header}</h2>
              </div>
              <div className="blog-headline-summary">
                {articlesList[0].abstractLG}
              </div>
            </div>
            <div className="blog-headline-cta">
              <Link to={`./${articlesList[0].title}`}>
                <small> Read More</small>
              </Link>
            </div>
          </div>
        </div>
        <div className="previous-articles-header">
          <h3>Previous Articles</h3>
        </div>
        <div className="blog-articles-container">
          {articlesList.map(
            (article, key) =>
              key !== 0 && (
                <div className="blog-article">
                  <div className="blog-article-image">
                    <Link to={`./${article.title}`}>
                      <img src={images[article.id]} alt="" />
                    </Link>
                  </div>
                  <div className="blog-article-date">
                    <small> {article.created}</small>
                  </div>
                  <div className="blog-article-title">
                    <h3> {article.header}</h3>
                  </div>
                  <div className="blog-article-summary">
                    <p>{article.abstract}</p>
                  </div>
                  <div className="blog-article-cta">
                    <Link to={`./${article.title}`}>
                      <small>Read </small>
                    </Link>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
