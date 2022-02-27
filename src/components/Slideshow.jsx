import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

function Slideshow() {
  let { id } = useParams();
  if (id > 14) id = 0;
  if (id < 0) id = 14;
  const { name, artist } = data[id];
  const navigate = useNavigate();

  return (
    <section className="slideShow">
      <div className="line"></div>
      <div>
        <div>
          <h3> {name}</h3>
          <p>{artist.name}</p>
        </div>
        <div>
          <button
            onClick={() => {
              navigate(`/art/${+id - 1}`);
            }}
          >
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#000000" fill="none" fillRule="evenodd">
                <path
                  d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                  strokeWidth="2px"
                  stroke="#000000"
                  fill="none"
                ></path>
                <path
                  fill="#D8D8D8"
                  d="M.986.5h-1v22.775h1z"
                  stroke="#000000"
                ></path>
              </g>
            </svg>
          </button>
          <button
            onClick={() => {
              navigate(`/art/${+id + 1}`);
            }}
          >
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#000000" fill="none" fillRule="evenodd">
                <path
                  d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                  strokeWidth="2px"
                  stroke="#000000"
                  fill="none"
                ></path>
                <path
                  fill="#D8D8D8"
                  d="M24.708.5h1v22.775h-1z"
                  stroke="#000000"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slideshow;
