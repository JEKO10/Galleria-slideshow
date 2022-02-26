import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function ArtPage() {
  const { id } = useParams();
  const { year, large, name, artist, description, source } = data[id];

  return (
    <section className="artPage">
      <div className="picture">
        <img src={large} alt={name} id="art" />
        <div>
          <div className="name">
            <h1>{name}</h1>
            <h2>{artist.name}</h2>
          </div>
          <img src={artist.image} alt={artist.name} id="artist" />
        </div>
      </div>
      <div className="artInfo">
        <h1>{year}</h1>
        <p>{description}</p>
        <a href={source} target="__blank">
          Go to Source
        </a>
      </div>
    </section>
  );
}

export default ArtPage;
