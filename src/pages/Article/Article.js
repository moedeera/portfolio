import React from "react";
import { useParams } from "react-router-dom";
import "./Article.css";

export const Article = () => {
  const post = useParams();
  console.log(post);
  return (
    <div className="article-page">
      <div className="article-page-container">
        <div className="articles-header">
          <small>Economy</small>
          <h1>Upcoming Recession in Tech Industry</h1>
          <p>
            {" "}
            is simply dummy text of the printing and typesetting industry. Lorem{" "}
          </p>
        </div>
        <div className="articles-image">
          <img
            src={
              "https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
          />
          <div className="article-details">
            <div className="articles-author">
              <h3>John Smith</h3>
              <small>March 2022</small>
            </div>
            <div className="articles-social-media">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
          </div>
          <div className="articles-text">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley. is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley. is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley
            <br />
            <br />
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley. is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley
          </div>
        </div>
      </div>
    </div>
  );
};
