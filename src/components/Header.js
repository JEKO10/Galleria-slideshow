import React from "react";
import Logo from "../images/logo.svg";

function Header() {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <button>Start Slideshow</button>
    </nav>
  );
}

export default Header;
