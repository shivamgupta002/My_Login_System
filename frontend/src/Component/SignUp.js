import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);

    try {
      await axios
        .post("http://localhost:5000/signUp", {
          name,
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("You already have a account");
            history("/");
          } else if (res.data === "not") {
            history("/home");
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
      <div className="container h-100 bg-gray">
      
            <h1>Sign Up</h1>

          <form action="POST" onSubmit={submit}>
            <div className="box">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className="submit mt-2">
              <input type="submit" value="Submit" />
            </div>
          </form>
          <div className="d-flex">
          <p>Already have a account :-</p>
        <Link to="/">Login</Link>
        </div>
        {/* <Link to="/home">Home</Link> */}
      </div>
    </>
  );
};

export default SignUp;
