import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "./styles/auth.css";

const Login = () => {
  const [username, setUsername] = useState(""); // Change to username
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username,  // Sending username instead of email
      password,
    };

    try {
      // Send POST request to API to fetch the token
      const response = await axios.post("http://127.0.0.1:8000/api/token/", formData);

      console.log("Login Successful:", response.data);

      // Store the received token (e.g., JWT) in localStorage
      localStorage.setItem("token", response.data.access);

      // Redirect user to add event page or dashboard
      navigate("/add-event");
    } catch (error) {
      console.error("Login Error:", error.response?.data?.detail || "Something went wrong!");
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username" // Updated placeholder to username
          value={username} // Bind username state to this input
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register" className="switch-link">
          Register here.
        </Link>
      </p>
      <p>
        Want to add an event?{" "}
      </p>
    </div>
  );
};

export default Login;
