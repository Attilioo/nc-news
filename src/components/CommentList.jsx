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
  const [isDeleting, setIsDeleting] = useState(false);

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
    setIsDeleting(true);
    deleteComment(comment_id)
      .then((response) => {
        const newComments = comments.filter(
          (comment) => comment.comment_id !== comment_id
        );
        setComments(newComments);
        setIsDeleting(false);
      })
      .catch((err) => {
        console.log(err);
        alert("there was an error, please try again later");
        setIsDeleting(false);
      });
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
                  isDeleting={isDeleting}
                />
              );
            })}
      </section>
    </>
  );
};

export default CommentList;
