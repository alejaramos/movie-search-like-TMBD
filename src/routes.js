import React from "react";
import { Route, Routes } from "react-router-dom";
import InfoMovieContainer from "./Containers/Info_movie_container";
import Welcome from "./Modules/Welcome";
import Login from "./Modules/Login";
import { useState, createContext } from "react";
import Favorites from "./Modules/Favorites"
import InfoTvContainer from "./Containers/Info_tv_container";
import InfoMovie from "./Modules/Search_movies";
import InfoTvShow from "./Modules/Search_tv_show";
import FindUsers from "./Modules/Find_users";
import Profile from "./Modules/Profile";

export const UserContext = createContext();

const Main = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/movie/:id" element={<InfoMovieContainer />}></Route>
        <Route path="/tv/:id" element={<InfoTvContainer />}></Route>
        <Route path="/logueado" element={<Welcome />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/logueado/favorites" element={< Favorites/>}></Route>
        <Route path="/logueado/movies" element={< InfoMovie/>}></Route>
        <Route path="/logueado/tvShow" element={< InfoTvShow/>}></Route>
        <Route path="/findUsers" element={< FindUsers/>}></Route>
        <Route path="/findUsers/profile/:id" element={< Profile/>}></Route>

      </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default Main;
