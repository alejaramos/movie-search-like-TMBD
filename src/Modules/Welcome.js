import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../routes";
import { useNavigate } from "react-router-dom";
import  { useContext } from "react";




const Welcome = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();


  const handleLogout = (e) => {
    e.preventDefault();
    axios.post("api/logout").then((res) => {
      navigate("/");
      setUser({});
      alert(`logged out`);
      localStorage.removeItem('user');
    });
  };


  return (
    <div >
    
      <>
        <header id="welcome">Welcome {user?user.email:""} 
        <Link to={`/logueado/favorites`}>
        <button type="button" id="fill">Favorites</button></Link>
        <Link to={`/findUsers`}>
        <button type="button" id="fill">Find others</button></Link>
        <button onClick={handleLogout} type="button" id="fill">Logout</button>

        </header>
      </>      
      <Link to={`/logueado/movies`}> <button type="button" className="simple">Search movies</button></Link>
      <Link to={`/logueado/tvShow`}><button type="button" className="simple">Search tv shows</button></Link>
     
    </div>
  );
};

export default Welcome;
