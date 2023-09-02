import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    // console.log(email, password);

    try {
      await axios
        .post("http://localhost:5000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home");
          } else if (res.data === "not") {
            alert("Please Sign up first");
            history("/signup");
          }
        })
        .catch((e) => {
          alert("Not Connected with database");
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="container h-100 bg-gray ">
        <h1>Login System</h1>
        <form action="POST" onSubmit={submit}>
          <div className="box">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="box">
            <label htmlFor="password">password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit mt-1">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="d-flex">
          <p>New User :</p>
          <Link to="/signUp">Sign Up</Link>
        </div>
        <div className="d-flex">
          <p>Log in as a guest :</p>
        <Link to="/home">Guest</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
