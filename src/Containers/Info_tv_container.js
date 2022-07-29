import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const InfoTvContainer = () => {
  const { id } = useParams();
  const ImgUrl = "https://image.tmdb.org/t/p/w500";

  const [oneTvShow, setOneTvShow] = React.useState({});

  useEffect(() => {
    axios
      .get(`/api/tv/${id}`)
      .then((response) => response.data)
      .then((busqueda) => setOneTvShow(busqueda));
  }, []);

  return (
    <div>
       <header id="userProfile">{oneTvShow.name} </header>
       <p id="userProfile"> Average vote: {oneTvShow.vote_average}</p>
      <h4 id="userProfile">{oneTvShow.overview}</h4>
      <img
        src={
          oneTvShow.poster_path
            ? ImgUrl + oneTvShow.poster_path
            : "http://via.placeholder.com/1080x1580"
        }
        alt={oneTvShow.original_title}
      />
    </div>
  );
};

export default InfoTvContainer;
