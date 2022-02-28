import React from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Link to="/art/0">
        <button>Start Slideshow</button>
      </Link>
    </nav>
  );
}

export default Header;
