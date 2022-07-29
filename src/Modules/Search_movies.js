import React from "react";
import axios from "axios";
import { UserContext } from "../routes";
import { useContext } from "react";
import ShowSearchMovies from "./Show_search_movies";

const InfoMovie = () => {
  
  const { user } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [movies, setMovies] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/api/search/movie/${searchTerm}`)
      .then((response) => response.data)
      .then((busqueda) => setMovies(busqueda));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <div className="search">
          <input
            type="text"
            placeholder="Search movie"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </form>
 
      <ShowSearchMovies movies={movies}></ShowSearchMovies>
    </>
  );
};

export default InfoMovie;
