import { useState } from "react";
import { useParams } from "react-router";
import { getCommentsByArticleId } from "../apis/api";
import CommentCard from "./CommentCard";
import "./styles/CommentList.css";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  getCommentsByArticleId(article_id).then((response) => {
    setComments(response.data);
  });

  return (
    <section className="comment-section">
      {comments.map((comment) => {
        return <CommentCard comment={comment} />;
      })}
    </section>
  );
};

export default CommentList;
