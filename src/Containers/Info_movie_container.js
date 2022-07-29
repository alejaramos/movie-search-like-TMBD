import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const InfoMovieContainer = () => {
  const { id } = useParams();

  const [oneMovie, setMovie] = React.useState({});
  const ImgUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    axios
      .get(`/api/movie/${id}`)
      .then((response) => response.data)
      .then((busqueda) => setMovie(busqueda));
  }, []);

  return (
    <div>
      <header id="userProfile">{oneMovie.original_title} </header>
      <p id="userProfile"> Average vote: {oneMovie.vote_average}</p>
      <h4 id="userProfile">{oneMovie.overview}</h4>
      <img
        src={
          oneMovie.poster_path
            ? ImgUrl + oneMovie.poster_path
            : "http://via.placeholder.com/1080x1580"
        }
        alt={oneMovie.original_title}
      
      />
    </div>
  );
};

export default InfoMovieContainer;
