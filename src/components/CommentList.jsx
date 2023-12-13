import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCommentsByArticleId, postCommentFromArticleId } from "../apis/api";
import CommentCard from "./CommentCard";
import "./styles/CommentList.css";
import CommentForm from "./CommentForm";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id]);

  // getCommentsByArticleId(article_id).then((response) => {
  //   setComments(response);
  // });
  // const handleCommentSubmit = (commentToPost) => {
  //   return postCommentFromArticleId(article_id, commentToPost).then(
  //     (response) => {
  //       console.log(response);
  //     }
  //   );
  // };

  return (
    <>
      <section className="comment-section form">
        <CommentForm setComments={setComments} />
      </section>
      <section className="comment-section">
        {comments.length === 0
          ? "There are no comments to display"
          : comments.map((comment) => {
              return <CommentCard comment={comment} />;
            })}
      </section>
    </>
  );
};

export default CommentList;
