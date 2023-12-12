import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../../apis/api";

import "../styles/Article.css";
import CommentList from "../CommentList";
const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticle(response);
    });
  }, []);

  return (
    <>
      <section className="article-main">
        <div className="article-data">
          <span className="article-info">
            <p className="author">{article.author}</p>{" "}
            <p className="topic">{article.topic}</p>
          </span>
          <p className="title">{article.title}</p>
          <p>{article.body}</p>

          <span>Karma:{article.votes}</span>
        </div>
      </section>

      <section className="comment-main">
        <CommentList />
      </section>
    </>
  );
};

export default Article;
