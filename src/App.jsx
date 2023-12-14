import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/MainPages/Home";
import Article from "./components/MainPages/Article";
import { UserProvider } from "./context/UserContext";
import Topics from "./components/MainPages/Topics";
import Topic from "./components/MainPages/Topic";
import ErrorPage from "./components/MainPages/ErrorPage";

function App() {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />{" "}
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic_name" element={<Topic />} />
      </Routes>{" "}
    </UserProvider>
  );
}

export default App;
