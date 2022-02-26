import { Link } from "react-router-dom";

function SingleArt({ id, thumbnail, name, artist }) {
  return (
    <Link to={`/art/${id}`}>
      <div className="singleArt">
        <img src={thumbnail} alt={name} />
        <div className="info">
          <h2>{name}</h2>
          <h3>{artist.name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default SingleArt;
