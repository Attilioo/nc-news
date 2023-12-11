import "./styles/ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <section className="article-card">
      <span className="article-info">
        <p>{article.author}</p> <p className="topic">{article.topic}</p>
      </span>
      <p className="title">{article.title}</p>
      <span className="article-info">
        <p>Votes:{article.votes}</p> <p>Comments: {article.comment_count}</p>
      </span>
    </section>
  );
};

export default ArticleCard;
