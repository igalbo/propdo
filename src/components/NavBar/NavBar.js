import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";
import propdoLogo from "../../assets/propdo-logo-white.png";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={propdoLogo} alt="propdo" width={64} />

        <h1>propdo houses</h1>
      </Link>
      <ul>
        <CustomLink to="/real-estate">real estate</CustomLink>
        <CustomLink to="/map">map</CustomLink>
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
