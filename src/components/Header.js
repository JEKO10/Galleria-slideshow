import React from "react";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      {/* <button>Start Slideshow</button> */}
    </nav>
  );
}

export default Header;
