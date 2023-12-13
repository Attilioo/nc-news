import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  deleteComment,
  getCommentsByArticleId,
  postCommentFromArticleId,
} from "../apis/api";
import CommentCard from "./CommentCard";
import "./styles/CommentList.css";
import CommentForm from "./CommentForm";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((response) => {
        setComments(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  const handleDeleteComment = (comment_id) => {
    deleteComment(comment_id).then(console.log("comment Deleted!"));
    const newComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );
    setComments(newComments);
  };
  return (
    <>
      <section className="comment-section form">
        <CommentForm setComments={setComments} />
      </section>
      <section className="comment-section">
        {comments.length === 0
          ? "There are no comments to display"
          : comments.map((comment) => {
              return (
                <CommentCard
                  comment={comment}
                  handleDeleteComment={handleDeleteComment}
                />
              );
            })}
      </section>
    </>
  );
};

export default CommentList;
