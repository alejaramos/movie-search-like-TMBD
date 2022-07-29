import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../routes";
import { useContext } from "react";

const Profile = ({ userFinded }) => {
  const { user } = useContext(UserContext);
  const [favorites, setFavorites] = useState([]);
  const [profileOwner, setProfileOwner] = useState({});
  const { id } = useParams();

  //debo crear la ruta axios que me trae el perfil del user buscado

  useEffect(() => {
    axios
      .get(`/api/getFavorites/${id}`)
      .then((response) => response.data)
      .then((favorites) => setFavorites(favorites));

    axios
      .get(`/api/profile/${id}`)
      .then((response) => response.data)
      .then((profileOwner) => setProfileOwner(profileOwner));
  }, []);

  return (
    <>
      <header id="favoritesWelcome">
        <button type="button" id="fill">
          <Link to={`/logueado`}>Go to your profile {user.email}</Link>
        </button>
      </header>

      <div>
        <h1 id="userProfile"> {profileOwner.email}'s Profile</h1>
        <img src="data:image/png;base64,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"/>
        <p></p>
        <h1 id="userProfile"> {profileOwner.email} favorites </h1>

        <lu id="userProfile">
          {!favorites? (
            <h4>el usuario no tiene lista de favoritos</h4>
          ) : (
            favorites.map((movie, i) => (
              <>
                <li key={i}>
                  <Link to={`/movie/${movie.idPeli}`}>{movie.movieName}</Link>
                </li>
              </>
            ))
          )}
        </lu>
      </div>
    </>
  );
};

export default Profile;

//aun no funciona la condicion de que si el usuario no tiene favortios aparezca lo que pide la condicion
