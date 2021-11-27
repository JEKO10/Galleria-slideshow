import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function ArtPage() {
  const { id } = useParams();
  const { year, large, name, artist, description, source } = data[id];

  return (
    <section className="artPage">
      <div>
        <img src={large} alt={name} />
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
