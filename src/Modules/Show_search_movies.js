import { Link } from "react-router-dom";
import { UserContext } from "../routes";
import { useContext } from "react";
import axios from "axios";

const ShowSearchMovies = ({ movies }) => {

  const { user } = useContext(UserContext);

  const addTofavorites = (movie) => {
    const movieName = movie.original_title;
    const movieId = movie.id;

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
      {movies.map((movie, i) => (
        <>
          <li key={i}>
            <Link to={`/movie/${movie.id}`}>{movie.original_title}</Link>
          </li>
          <button
            onClick={() => {
              addTofavorites(movie);
            }}
            name="movieToAdd"
            value={movie}
          >
            Add to favorites
          </button>
        </>
      ))}
    </ul>
  );
};


export default ShowSearchMovies;
