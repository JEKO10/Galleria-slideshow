import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import Slideshow from "./Slideshow";

function ArtPage({ slideShow, setSlideShow }) {
  let { id } = useParams();
  if (id > 14) id = 0;
  if (id < 0) id = 14;
  const defaultValue = {
    year: "No art Here",
    large: "No art Here",
    gallery: "No art Here",
    name: "Enter id as number",
    artist: "No art Here",
    description: "No art Here",
    source: "No art Here",
  };
  if (data[id] === undefined) {
    data[id] = defaultValue;
  }
  let { year, large, gallery, name, artist, description, source } = data[id];

  const [isOpened, setIsOpened] = useState(false);
  const [fade, setFade] = useState("");

  if (isOpened) {
    document.body.style.position = "fixed";
  } else {
    document.body.style.position = "static";
  }

  return (
    <>
      <div
        className={isOpened ? "large" : "large hide"}
        onClick={() => {
          setIsOpened(false);
        }}
      >
        <button
          onClick={() => {
            setIsOpened(false);
          }}
        >
          CLOSE
        </button>
        <div>
          <img src={gallery} alt={name} />
        </div>
      </div>
      <section className="artPage" key={id}>
        <div
          className={
            fade === "left"
              ? "picture left"
              : fade === "right"
              ? "picture right"
              : "picture"
          }
        >
          <figure>
            <img src={large} alt={name} id="art" />
            <button
              onClick={() => {
                setIsOpened(true);
              }}
            >
              <svg
                xlink="http://www.w3.org/1999/xlink"
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#FFFFFF" fillRule="nonzero">
                  <path
                    d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
              VIEW IMAGE
            </button>
          </figure>
          <div>
            <div className="name">
              <h1>{name}</h1>
              <h2>{artist.name}</h2>
            </div>
            <img src={artist.image} alt={artist.name} id="artist" />
          </div>
        </div>
        <div
          className={
            fade === "left"
              ? "artInfo left"
              : fade === "right"
              ? "artInfo right"
              : "artInfo"
          }
        >
          <h1>{year}</h1>
          <p>{description}</p>
          <a href={source} target="__blank">
            Go to Source
          </a>
        </div>
      </section>

      <Slideshow
        slideShow={slideShow}
        setSlideShow={setSlideShow}
        setFade={setFade}
      />
    </>
  );
}

export default ArtPage;
