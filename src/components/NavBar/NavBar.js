import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import MapsHomeWorkTwoToneIcon from "@mui/icons-material/MapsHomeWorkTwoTone";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <MapsHomeWorkTwoToneIcon />
        Real Estate
      </Link>
      <ul>
        <CustomLink to="/real-estate">Real Estate</CustomLink>
        <CustomLink to="/map">Map</CustomLink>
      </ul>
    </nav>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const fullPath = useResolvedPath(to);
  const isActive = useMatch({ path: fullPath.pathname, end: true });

  return (
    <li className={isActive && "active"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default NavBar;
