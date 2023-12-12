import axios from "axios";
const api = axios.create({
  baseURL: "https://nc-news-backend-yh47.onrender.com/",
});

export function getAllArticlesByTopic(category = "") {
  return api
    .get(`api/articles?topic=${category}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getArticleById(article_id) {
  return api
    .get(`api/articles/${article_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getCommentsByArticleId(article_id) {
  return api
    .get(`api/articles/${article_id}/comments`)
    .then((response) => {
      if (response.data.length === 0) return [];
      return response.data;
    })
    .catch((err) => {
      console.log(err);
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
