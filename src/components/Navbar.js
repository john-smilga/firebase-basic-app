import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {user ? <Link to="/create">Create Post</Link> : null}
      <Login></Login>
    </nav>
  );
};

export default Navbar;
