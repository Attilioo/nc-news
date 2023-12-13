import "./styles/CommentCard.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const CommentCard = ({ comment, handleDeleteComment, isDeleting }) => {
  const { user } = useContext(UserContext);
  return (
    <section className={`comment-card ${isDeleting ? "deleting" : ""}`}>
      <span className="article-info">
        <p className="author">{comment.author}</p> <p>{comment.created_at}</p>
      </span>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
      {user === comment.author ? (
        <button onClick={() => handleDeleteComment(comment.comment_id)}>
          Delete comment
        </button>
      ) : null}
    </section>
  );
};

export default CommentCard;
