import { useState } from "react";
import { articles } from "../assets/data/articles";

export const useArticles = () => {
  const [articlesList, setArticles] = useState(articles);

  return {
    articlesList,
    setArticles,
  };
};
