import { getAllArticlesByTopic } from "../../apis/api";
import ArticleCard from "../ArticleCard";
import { useEffect, useState } from "react";
import ArticlesList from "../ArticlesList";
import { useSearchParams } from "react-router-dom";
import Error from "./Error";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "ASC";
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllArticlesByTopic("", sortBy, order)
      .then((response) => {
        setArticles(response);
      })
      .catch((err) => {
        setError({ err });
        console.log(err);
      });
  }, [sortBy, order]);

  if (error) {
    return <Error message={error} />;
  }
  return (
    <div>
      <label>Sort by: </label>
      <select
        value={sortBy}
        onChange={(e) =>
          setSearchParams({ sort_by: e.target.value, order: order })
        }
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>

      <label>Order: </label>
      <select
        value={order}
        onChange={(e) =>
          setSearchParams({ sort_by: sortBy, order: e.target.value })
        }
      >
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>

      <ArticlesList articles={articles} />
    </div>
  );
};

export default Home;
