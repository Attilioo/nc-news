import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTopics } from "../../apis/api";
import { getAllArticlesByTopic } from "../../apis/api";
import ArticlesList from "../ArticlesList";
import Error from "./Error";
const Topic = () => {
  const [topic, setTopic] = useState({});
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_name } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopics()
      .then((response) => {
        const chosenTopic = response.filter((topic) => {
          return topic.slug === topic_name;
        });
        if (chosenTopic.length === 0) {
          const err = {
            status: 400,
            statusText: `The '${topic_name}' topic does not exist`,
          };
          setError(err);
          return err;
        }
        setTopic(chosenTopic[0]);
        setIsLoading(false);
        return getAllArticlesByTopic(topic_name);
      })
      .then((articles) => {
        setArticles(articles);
      });
  }, []);

  if (error) {
    return <Error message={error.statusText} />;
  }
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
