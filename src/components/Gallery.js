import React from "react";
import data from "../data.json";
import SingleArt from "./SingleArt";

function Gallery() {
  return (
    <section className="gallery">
      {data.map((art) => {
        return <SingleArt key={art.id} {...art} />;
      })}
    </section>
  );
}

export default Gallery;
