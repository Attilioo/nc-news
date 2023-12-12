import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router";

import { postCommentFromArticleId } from "../apis/api";
const CommentForm = ({ setComments }) => {
  const { user } = useContext(UserContext);
  const { article_id } = useParams();

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
    postCommentFromArticleId(article_id, commentToPost).then((response) => {
      console.log(response);
      setComments((curr) => {
        return [response, ...curr];
      });
      setCommentToPost({
        body: "",
        username: user,
      });
    });
   };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="body" />
      <input
        type="text"
        name="body"
        placeholder="write your comment here..."
        onChange={handleInput}
        required
        value={commentToPost.body}
      />
      <button>Submit</button>
    </form>
  );
};

export default CommentForm;
