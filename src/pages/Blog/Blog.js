import React, { useContext } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import pic1 from "./recession.jpg";
import pic2 from "./design.jpg";
import { SiteContext } from "../../context/Context";

const images = [pic1, pic2];
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
            <img src={images[articlesList[0].id]} alt="" />
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
          <h2>Previous Articles</h2>
        </div>
        <div className="blog-articles-container">
          {articlesList.map((article) => (
            <div className="blog-article">
              <div className="blog-article-image">
                <img src={images[article.id]} alt="" />
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
          ))}

          <div className="blog-article">
            <div className="blog-article-image">
              <img
                src={
                  "https://images.pexels.com/photos/286565/pexels-photo-286565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
              />
            </div>
            <div className="blog-article-date">March 2022</div>
            <div className="blog-article-title">
              <h3> Why the market for Designers is hot</h3>
            </div>
            <div className="blog-article-summary">
              <p>
                {" "}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div className="blog-article-cta">
              <small>read more</small>
            </div>
          </div>
          <div className="blog-article">
            <div className="blog-article-image">
              <img
                src={
                  "https://images.pexels.com/photos/286565/pexels-photo-286565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
              />
            </div>
            <div className="blog-article-date">March 2022</div>
            <div className="blog-article-title">
              <h3> Why the market for Designers is hot</h3>
            </div>
            <div className="blog-article-summary">
              <p>
                {" "}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div className="blog-article-cta">
              <small>read more</small>
            </div>
          </div>
          <div className="blog-article">
            <div className="blog-article-image">
              <img
                src={
                  "https://images.pexels.com/photos/286565/pexels-photo-286565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
              />
            </div>
            <div className="blog-article-date">March 2022</div>
            <div className="blog-article-title">
              <h3> Why the market for Designers is hot</h3>
            </div>
            <div className="blog-article-summary">
              <p>
                {" "}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div className="blog-article-cta">
              <small>read more</small>
            </div>
          </div>
          <div className="blog-article">
            <div className="blog-article-image">
              <img
                src={
                  "https://images.pexels.com/photos/286565/pexels-photo-286565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
              />
            </div>
            <div className="blog-article-date">March 2022</div>
            <div className="blog-article-title">
              <h3> Why the market for Designers is hot</h3>
            </div>
            <div className="blog-article-summary">
              <p>
                {" "}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div className="blog-article-cta">
              <small>read more</small>
            </div>
          </div>

          <div className="blog-article">
            <div className="blog-article-image">
              <img
                src={
                  "https://images.pexels.com/photos/286565/pexels-photo-286565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
              />
            </div>
            <div className="blog-article-date">March 2022</div>
            <div className="blog-article-title">
              <h3> Why the market for Designers is hot</h3>
            </div>
            <div className="blog-article-summary">
              <p>
                {" "}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div className="blog-article-cta">
              <small>read more</small>
            </div>
          </div>
          <div className="blog-article">
            <div className="blog-article-image">
              <img
                src={
                  "https://images.pexels.com/photos/286565/pexels-photo-286565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
              />
            </div>
            <div className="blog-article-date">March 2022</div>
            <div className="blog-article-title">
              <h3> Why the market for Designers is hot</h3>
            </div>
            <div className="blog-article-summary">
              <p>
                {" "}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div className="blog-article-cta">
              <small>read more</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
