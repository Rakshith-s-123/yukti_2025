import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [rEmail, setrEmail] = useState("");
  const [rPassword, setrPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Restaurant/login", { rEmail, rPassword })
      .then((res) => {
        const { token, message } = res.data; // Destructure token and message from response data
        if (token) {
          localStorage.setItem("token", token); // Store the token in localStorage or a cookie
          window.location.href = "/";
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="formarea">
        <h1>Login</h1>
        <div className="inputarea">
          <label className="labels" htmlFor="email">
            Email:
          </label>
          <input
            className="inputs"
            type="email"
            id="email"
            onChange={(e) => setrEmail(e.target.value)}
          />
        </div>
        <div className="inputarea">
          <label className="labels" htmlFor="password">
            Password:
          </label>
          <input
            className="inputs"
            type="password"
            id="password"
            onChange={(e) => setrPassword(e.target.value)}
          />
        </div>
        <div className="btnarea">
          <button className="btn" type="submit">
            Login
          </button>
          <p>
            First time on our website?{" "}
            <NavLink to="/Restaurant/register">Register Now</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
