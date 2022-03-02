import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header({ slideShow, setSlideShow }) {
  return (
    <nav>
      <Link
        to="/"
        onClick={() => {
          setSlideShow(false);
        }}
      >
        <img src={Logo} alt="Logo" />
      </Link>
      <Link
        to={!slideShow ? "/art/0" : "#"}
        onClick={() => {
          setSlideShow(!slideShow);
        }}
      >
        <button>{slideShow ? "Stop" : "Start"} Slideshow</button>
      </Link>
    </nav>
  );
}

export default Header;
