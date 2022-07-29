import React from "react";
import axios from "axios";


const CreateUser = () => {
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");

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
      .post("api/createUser", {
        email: email,
        password: password,
      })
      .then((res) => {
        alert(" successfully created");
        // aca deberia poner un navigate to que los lleve a donde se buscan las peliculas
        return res.data;
      });
  };

  return (
    <div>
     
      <h3 id="userProfile">Are you new here? Create your user account and enjoy!</h3>

<div className="container">
        <form id="signup" onSubmit={handleSubmit}>
          <div className="header">
            <h3>New account</h3>
          </div>

          <div className="sep"></div>

          <div className="inputs">
            <input
               name="email"
               onChange={handleChange}
               value={email}
               type="email"
               placeholder="Email"
               required
               autoFocus
            />

            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={password}
              name="password"
              required
            />

            <button className="simple">Create my user</button>

          </div>
        </form>
      </div>
      </div>
  );
};

export default CreateUser;
