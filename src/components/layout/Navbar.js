import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar">
      <div className="logoUsername">
        <i className={icon} /> {title}
      </div>
      <div className="hrefOptions">
        <span>
          <Link to="/"> Home </Link>
        </span>
        <span>
          <Link to="/about"> About </Link>
        </span>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github User Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
