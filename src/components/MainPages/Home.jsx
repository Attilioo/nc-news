import { getAllArticlesByTopic } from "../../apis/api";
import ArticleCard from "../ArticleCard";
import { useEffect, useState } from "react";
import ArticlesList from "../ArticlesList";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "ASC";

  useEffect(() => {
    getAllArticlesByTopic("", sortBy, order)
      .then((response) => {
        setArticles(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortBy, order]);

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
        <option value="comment_count">Comment Count</option>
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
