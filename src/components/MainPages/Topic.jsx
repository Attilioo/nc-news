import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTopics } from "../../apis/api";
import { getAllArticlesByTopic } from "../../apis/api";
import ArticlesList from "../ArticlesList";

const Topic = () => {
  const [topic, setTopic] = useState({});
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_name } = useParams();

  useEffect(() => {
    getTopics()
      .then((response) => {
        const chosenTopic = response.filter((topic) => {
          return topic.slug === topic_name;
        });
        setTopic(chosenTopic[0]);
        setIsLoading(false);
        return getAllArticlesByTopic(chosenTopic[0].slug);
      })
      .then((articles) => {
        setArticles(articles);
      });
  }, []);

  return (
    <>
      {" "}
      {isLoading ? (
        <p>Please Wait the Topic is loading...</p>
      ) : (
        <>
          <section className="article-main">
            <div className="article-data">
              <h3>{topic.slug}</h3>
              <p>{topic.description}</p>
            </div>
          </section>
          <section className="article-main">
            <ArticlesList articles={articles} />
          </section>
        </>
      )}
    </>
  );
};

export default Topic;
