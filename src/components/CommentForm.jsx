import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router";

import { postCommentFromArticleId } from "../apis/api";
const CommentForm = ({ setComments }) => {
  const { user } = useContext(UserContext);
  const { article_id } = useParams();
  const [isDisabled, setIsDisabled] = useState(false);

  const [commentToPost, setCommentToPost] = useState({
    body: "",
    username: user,
  });

  const handleInput = (event) => {
    setCommentToPost((curr) => {
      return {
        ...curr,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    postCommentFromArticleId(article_id, commentToPost)
      .then((response) => {
        console.log(response);
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="body" />
      <textarea
        type="text"
        name="body"
        placeholder="write your comment here..."
        onChange={handleInput}
        required
        value={commentToPost.body}
      />
      <button disabled={isDisabled}>Submit</button>
    </form>
  );
};

export default CommentForm;
