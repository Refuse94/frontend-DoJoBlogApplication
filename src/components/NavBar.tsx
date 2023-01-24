import { Link } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  return (
    <div className="nav_bar">
      <h2>Titlle page</h2>
      <Link
        style={{ color: "white", textDecoration: "none", marginRight: "50px" }}
        to="/"
      >
        Home
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/create">
        New Blog
      </Link>
    </div>
  );
};
