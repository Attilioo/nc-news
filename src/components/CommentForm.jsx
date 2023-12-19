import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router";
import Error from "./MainPages/Error";
import "./styles/CommentForm.css";
import { postCommentFromArticleId } from "../apis/api";
const CommentForm = ({ setComments }) => {
  const { user } = useContext(UserContext);
  const { article_id } = useParams();
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(null);

  const [commentToPost, setCommentToPost] = useState({
    body: "",
    username: user,
  });

  const handleInput = (event) => {
    setError(false);
    setCommentToPost((curr) => {
      return {
        ...curr,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    if (commentToPost.body.length < 5) {
      setIsDisabled(true);
      setError(true);
      setCommentToPost({
        body: "",
        username: user,
      });
      setIsDisabled(false);
      return;
    }
    setIsDisabled(true);
    postCommentFromArticleId(article_id, commentToPost)
      .then((response) => {
        setComments((curr) => {
          return [response, ...curr];
        });
        setCommentToPost({
          body: "",
          username: user,
        });
        setIsDisabled(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <label htmlFor="body" />
      <textarea
        type="text"
        name="body"
        placeholder="Write your comment here..."
        onChange={handleInput}
        required
        value={commentToPost.body}
        id="textarea"
      />
      <button disabled={isDisabled}>Submit</button>
      {error ? (
        <Error message={"The comment needs at least 3 characters!"} />
      ) : null}
    </form>
  );
};

export default CommentForm;
