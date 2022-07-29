import { useContext } from "react";
import React from "react";
import axios from "axios";
import { UserContext } from "../routes";
import { useEffect } from "react";

const Favorites = () => {
  const { user, setUser } = useContext(UserContext);
  const [favoriteMovies, setFavoriteMovies] = React.useState([]);

  const eliminate = (movie) => {
    const movieId = movie.id;
    axios.delete(`/api/favorites/delete/${movieId}`).then(() => {
      alert("movie successfully removed");
      axios
        .get(`/api/getFavorites/${user.id}`)
        .then((response) => response.data)
        .then((busqueda) => setFavoriteMovies(busqueda));
    });
  };

  useEffect(() => {
    axios
      .get(`/api/getFavorites/${user.id}`)
      .then((response) => response.data)
      .then((busqueda) => setFavoriteMovies(busqueda));
  }, []);

  return (
    <>
      <header id="favoritesWelcome">Your favorites, {user.email}</header>
      <ul id="favoritesView">
        {favoriteMovies.map((movie, i) => (
          <>
            <li key={i}>{movie.movieName}</li>
            
            <p> <button
              onClick={() => {
                eliminate(movie);
              }}
              type="button"
              id="fill"
            >
              Eliminate
            </button>
            </p>
          </>
        ))}
      </ul>
    </>
  );
};

export default Favorites;
