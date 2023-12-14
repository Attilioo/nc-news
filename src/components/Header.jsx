import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./styles/Header.css";
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <section className="header">
      <span>Logo</span>
      <nav className="nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/topics"}>Topics</Link>
      </nav>
      {/* This is now only a placeholder. later I'm going to add functionality to log-in and display an error if the username doesnt'exist/is not logged in */}
      <p>Logged in as: {user}</p>
    </section>
  );
};

export default Header;
