import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../routes";

const FindUsers = () => {
  const [searchedUser, setsearchedUser] = useState("");
  const [userFinded, setuserFinded] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const handleChange = (event) => {
    setsearchedUser(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .get(`/api/findOthers/${searchedUser}`)
    .then((user) => setuserFinded(user.data))

       
  };


  return (
    <>
     <header id="favoritesWelcome">Find your friends, {user.email}</header>
      <form onSubmit={handleSubmit} className="search"> Find your friends by email here
        <div className="search">

          <input
            id="input"
            type="text"
            value={searchedUser}
            onChange={handleChange}
            placeholder="search user by email"
          />
         
        </div>
      </form>
      <ul id="favoritesView">
            {userFinded.map((user, i) => (
              <>
              <li key={i}><Link to={`/findUsers/profile/${user.id}`}>{user.email}</Link>
                
                </li>
  
                </>
            ))}
          </ul>
          {/* <Profile userFinded={userFinded}/> */}
    </>
  );
};

export default FindUsers;

