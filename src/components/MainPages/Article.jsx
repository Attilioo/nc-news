import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById, voteArticle } from "../../apis/api";

import "../styles/Article.css";
import CommentList from "../CommentList";
import VoteButton from "../VoteButton";
const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [totalVotes, setTotalVotes] = useState(article.vote);
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);

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

    getArticleById(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id]);

  useEffect(() => {
    setTotalVotes(article.votes);
  }, [article.votes]);

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

      <section className="comment-main">
        <CommentList />
      </section>
    </>
  );
};

export default Article;
