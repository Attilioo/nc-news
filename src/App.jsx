import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/MainPages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
