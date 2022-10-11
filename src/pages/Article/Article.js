import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { SiteContext } from "../../context/Context";
import "./Article.css";
import { Link } from "react-router-dom";
import { Videoplayer } from "../../components/videoplayer/videoplayer";
import { TwitterShareButton } from "react-twitter-embed";
import { blogImages } from "../../assets/data/images/index.js";

import avatar from "./avatar.jpg";

export const Article = () => {
  const { post } = useParams();

  const { getArticle, articlesList } = useContext(SiteContext);

  return <div className="article-page">Hello</div>;
};
