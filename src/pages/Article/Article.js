import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { SiteContext } from "../../context/Context";
import "./Article.css";
const pic1 = "../Blog/recession.jpg";
const pic2 = "../Blog/design.jpg";

const images = [pic1, pic2];

export const Article = () => {
  const { post } = useParams();

  const { getArticle } = useContext(SiteContext);

  const article = useMemo(() => {
    return getArticle(post);
  }, [post, getArticle]);

  console.log(post, article);
  return (
    <div className="article-page">
      <div className="article-page-container">
        <div className="articles-header">
          <small>{article?.topic}</small>
          <h1>{article?.header}</h1>
          <p>{article?.abstract}</p>
        </div>
        <div className="articles-image">
          <img src={article.pic1} alt="" />
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
            {/* is simply dummy text of the printing and typesetting industry. Lorem
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
            printer took a galley */}
            {`${article.summary}`}
          </div>
        </div>
      </div>
    </div>
  );
};
