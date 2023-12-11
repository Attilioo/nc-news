import { getAllArticlesByTopic } from "../../apis/api";
import ArticleCard from "../ArticleCard";
import { useEffect, useState } from "react";
import ArticlesList from "../ArticlesList";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticlesByTopic().then((response) => {
      setArticles(response.data);
    });
  }, []);

  return <ArticlesList articles={articles}/>;
};

export default Home;
