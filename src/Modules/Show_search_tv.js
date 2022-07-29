import { Link } from "react-router-dom";
import { UserContext } from "../routes";
import { useContext } from "react";
import axios from "axios";

const ShowSearchTv = ({ tvShow }) => {

  const { user } = useContext(UserContext);

  const addTofavorites = (show) => {
    const movieName = show.name;
    const movieId = show.id;

    axios
      .post("/api/addToFavorites", {
        movieName: movieName,
        idPeli: movieId,
        userId: user.id,
      })
      .then((res) => {
        alert("movie successfully added");
      });
  };

  return (
    <ul>
      {tvShow.map((Show, i) => (
        <>
          <li key={i}>
            {" "}
            <Link to={`/tv/${Show.id}`}>{Show.name}</Link>
          </li>
          <button
            onClick={() => {
              addTofavorites(Show);
            }}
            name="movieToAdd"
            value={Show}
          >
            Add to favorites
          </button>
        </>
      ))}
    </ul>
  );
};


export default ShowSearchTv;