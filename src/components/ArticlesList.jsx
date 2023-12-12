import ArticleCard from "./ArticleCard";
import { v4 as uuid } from "uuid";
import "./styles/ArticleList.css";
const ArticlesList = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <section className="article-list">
        Please Wait Articles are loading...
      </section>
    );
  }
  return (
    <section className="article-list">
      {articles.map((article) => {
        return <ArticleCard article={article} key={uuid()} />;
      })}
    </section>
  );
};

export default ArticlesList;
