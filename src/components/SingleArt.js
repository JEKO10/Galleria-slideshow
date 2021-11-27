import React from "react";
import { Link } from "react-router-dom";

function SingleArt({ id, thumbnail, name }) {
  return (
    <Link to={`/art/${id}`}>
      <div>
        <img src={thumbnail} alt={name} />
      </div>
    </Link>
  );
}

export default SingleArt;
