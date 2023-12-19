import "./styles/ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`} className="article-link">
      <section className="article-card">
        <span className="article-info">
          <p className="author">{article.author}</p>{" "}
          <p className="topic">{article.topic}</p>
        </span>
        <h2 className="title">{article.title}</h2>
        <span className="article-info">
          <p>Votes:{article.votes}</p> <p>Comments: {article.comment_count}</p>
        </span>
      </section>
    </Link>
  );
};

export default ArticleCard;
