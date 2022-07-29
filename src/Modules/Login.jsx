import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../routes";
import CreateUser from "./Create_user";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setpassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        alert(`logged user ${email}`);
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/logueado");
      });
  };

  const googleAuth = (e) => {
    axios.get("api/auth/google").then((res) => console.log(res));
  };

  return (
    <>
      <header id="userProfile">Welcome to movie app </header>
      <p></p>
      <div className="container">
        <form id="signup" onSubmit={handleSubmit}>
          <div className="header">
            <h3>Log In</h3>
          </div>

          <div className="sep"></div>

          <div className="inputs">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              value={email}
              autoFocus
            />

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange}
              value={password}
            />

            <button id="fill">Log in</button>
            <p></p>
            <button id="fill">
              <a href="http://localhost:8080/api/auth/google">
                Authenticate with Google
              </a>
            </button>
          </div>
        </form>
      </div>
      ​<CreateUser></CreateUser>
    </>
  );
};

export default Login;
