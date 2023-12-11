import { Link } from "react-router-dom";

import "./styles/Header.css";
const Header = () => {
  return (
    <section className="header">
      <span>Logo</span>
      <nav className="nav">
        <Link to={"/"}>Home</Link>
      </nav>
    </section>
  );
};

export default Header;
