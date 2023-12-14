import axios from "axios";
const api = axios.create({
  baseURL: "https://nc-news-backend-yh47.onrender.com/",
});

export function getAllArticlesByTopic(
  category = "",
  sortBy = "",
  order = "ASC"
) {
  return api
    .get(`api/articles?topic=${category}&sort_by=${sortBy}&order=${order}`)
    .then((response) => {
      return response.data;
    });
}

export function getArticleById(article_id) {
  return api.get(`api/articles/${article_id}`).then((response) => {
    return response.data;
  });
}

export function getCommentsByArticleId(article_id) {
  return api.get(`api/articles/${article_id}/comments`).then((response) => {
    if (response.data.length === 0) return [];
    return response.data;
  });
}

export function postCommentFromArticleId(article_id, comment) {
  return api
    .post(`api/articles/${article_id}/comments`, comment)
    .then((response) => {
      return response.data;
    });
}

export function voteArticle(article_id, vote) {
  const incomingVote = {
    inc_votes: vote,
  };
  return api
    .patch(`api/articles/${article_id}`, incomingVote)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteComment(comment_id) {
  return api.delete(`api/comments/${comment_id}`).then((response) => {
    return response.data;
  });
}
