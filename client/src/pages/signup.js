import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link,useNavigate } from "react-router-dom";

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post("http://localhost:3001/auth/register", {
          username,
          password,
        });
        alert("Registration Completed! Now login.");
        navigate("/login")
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <div className="recipe-base">
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
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
          <button className="button-log" type="submit">Register</button>
          <br/>
          <br/>
          <h2>Already an User ?  <button className="button-switch"><Link to="/login">Login</Link></button></h2>
          
        </form>
      </div>
      </div>
    );
  };
  