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
