import "./styles/CommentCard.css";
const CommentCard = ({ comment }) => {
  return (
    <section className="comment-card">
      <span className="article-info">
        <p className="author">{comment.author}</p> <p>{comment.created_at}</p>
      </span>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
    </section>
  );
};

export default CommentCard;
