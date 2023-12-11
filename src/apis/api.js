import axios from "axios";
const api = axios.create({
  baseURL: "https://nc-news-backend-yh47.onrender.com/",
});

export function getAllArticlesByTopic(category = "") {
  return api
    .get(`api/articles?topic=${category}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getArticleById(article_id) {
  return api
    .get(`api/articles/${article_id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getCommentsByArticleId(article_id) {
  return api
    .get(`api/articles/${article_id}/comments`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}