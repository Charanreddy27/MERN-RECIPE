import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
export const Login = () => {
    const [_, setCookies] = useCookies(["access_token"]);
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const result = await axios.post("http://localhost:3001/auth/login", {
          username,
          password,
        });
  
        setCookies("access_token", result.data.token);
        window.localStorage.setItem("userID", result.data.userID);
        navigate("/");
        toast.success("Logged in successfully");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="recipe-base">
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="button-log" type="submit">Login</button>
          <br/>
          <br/>
          <h2> Not an User..?  <button className="button-switch"><Link to="/signup">Signup</Link></button></h2>
        </form>
      </div>
      </div>
    );
  };