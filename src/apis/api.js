import axios from "axios";
const api = axios.create({
  baseURL: "https://nc-news-backend-yh47.onrender.com/",
});

export function getAllArticlesByTopic(category = "") {
  return api.get(`api/articles?topic=${category}`).then((response) => {
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
