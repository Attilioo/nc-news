import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/MainPages/Home";
import Article from "./components/MainPages/Article";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/api/articles/:article_id" element={<Article />} />
      </Routes>{" "}
    </UserProvider>
  );
}

export default App;
