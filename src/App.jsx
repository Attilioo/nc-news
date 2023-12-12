import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/MainPages/Home";
import Article from "./components/MainPages/Article";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/api/articles/:article_id" element={<Article />} />
      </Routes>{" "}
    </>
  );
}

export default App;
