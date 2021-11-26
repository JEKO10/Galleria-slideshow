import React from "react";
import data from "../data.json";

function Gallery() {
  console.log(data);
  return (
    <section className="gallery">
      {data.map((art) => {
        return (
          <div key={art.id}>
            {/* <img src={art.images.thumbnail} alt="" /> */}
            <img src={art.artist.image} alt="" />
            <img src={art.images.small} alt="" />
          </div>
        );
      })}
    </section>
  );
}

export default Gallery;

// "image": "./assets/starry-night/artist.jpg",
