import { useParams, useNavigate } from "react-router-dom";

function Slideshow() {
  let { id } = useParams();
  if (id > 14) id = 0;
  if (id < 0) id = 14;
  const navigate = useNavigate();

  return (
    <section className="slideShow">
      Slideshow
      <button
        onClick={() => {
          navigate(`/art/${+id - 1}`);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          navigate(`/art/${+id + 1}`);
        }}
      >
        Next
      </button>
    </section>
  );
}

export default Slideshow;
