import "./Navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="n-left">
        <h1>The DoJo Blog</h1>
      </div>
      <div className="n-right">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Create">New Blog</Link>
          <Link to="/About">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
