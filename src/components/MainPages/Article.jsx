import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById, voteArticle } from "../../apis/api";
import Error from "./Error";
import "../styles/Article.css";
import CommentList from "../CommentList";
import VoteButton from "../VoteButton";
import { Link } from "react-router-dom";
const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [totalVotes, setTotalVotes] = useState(article.vote);
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);
  const [error, setError] = useState(null);

  const handleUpvote = () => {
    const chosenVote = 1;
    voteArticle(article_id, chosenVote);
    setTotalVotes((curr) => curr + 1);
    setUpVoted(true);
    setDownVoted(false);
  };

  const handleDownvote = () => {
    const chosenVote = -1;
    voteArticle(article_id, chosenVote)
      .then()
      .catch((err) => {
        console.log(err);
        setTotalVotes(article.vote);
      });
    setTotalVotes((curr) => curr - 1);
    setDownVoted(true);
    setUpVoted(false);
  };

  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
      })
      .catch(() => {
        const mistake = { status: 400, statusText: "Article not found" };
        setError(mistake);
      });
  }, [article_id]);

  useEffect(() => {
    setTotalVotes(article.votes);
  }, [article.votes]);

  if (error) {
    return <Error message={error.statusText} />;
  } else {
    return (
      <>
        <section className="article-main">
          <div className="article-data">
            <span className="article-info">
              <p className="author">{article.author}</p>{" "}
              <Link to={`/topics/${article.topic}`} className="category-link">
                <p className="topic">{article.topic}</p>
              </Link>
            </span>
            <h2 className="title">{article.title}</h2>
            <p>{article.body}</p>

            <span className="article-info">
              Karma: {totalVotes}{" "}
              <span>
                <VoteButton
                  voteType="upvote"
                  handleVote={handleUpvote}
                  disabled={upVoted}
                >
                  &#128077;
                </VoteButton>
                <VoteButton
                  voteType="downvote"
                  handleVote={handleDownvote}
                  disabled={downVoted}
                >
                  &#128078;
                </VoteButton>
              </span>
            </span>
          </div>
        </section>
        {error ? null : (
          <section className="comment-main">
            <CommentList />
          </section>
        )}
      </>
    );
  }
};

export default Article;
