import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function ArtPage() {
  let { id } = useParams();
  let counter = id;
  const { year, small, name, artist, description, source } = data[id];

  return (
    <section className="artPage">
      <div>
        <img src={small} alt={name} />
        <h1>{name}</h1>
        <h2>{artist.name}</h2>
        <img src={artist.image} alt={artist.name} />
      </div>
      <div>
        <h1>{year}</h1>
        <p>{description}</p>
        <a href={source} target="__blank">
          Go to Source
        </a>
      </div>
      <button
        onClick={() => {
          id++;
          console.log(id);
        }}
      >
        Aleksa
      </button>
    </section>
  );
}

export default ArtPage;
