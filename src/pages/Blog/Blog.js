import React, { useContext } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import pic1 from "./recession.jpg";
import pic2 from "./webflow.jpg";
import pic3 from "./design.jpg";
import pic4 from "./progress.jpg";
import pic5 from "./pbuddies.jpg";
import { SiteContext } from "../../context/Context";

const images = [pic1, pic2, pic3, pic4, pic5];
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
            <div className="blog-headline-date">
              <p>{articlesList[0].date}</p>
            </div>
            <div className="blog-headline-title">
              <h2>{articlesList[0].header}</h2>
            </div>
            <div className="blog-headline-summary">
              {articlesList[0].abstract}
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
                  <div className="blog-article-date">{article.date}</div>
                  <div className="blog-article-title">
                    <h3> {article.header}</h3>
                  </div>
                  <div className="blog-article-summary">
                    <p>{article.abstract}</p>
                  </div>
                  <div className="blog-article-cta">
                    <Link to={`./${article.title}`}>
                      <small>read more</small>
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
