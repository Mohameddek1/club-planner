import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./styles/auth.css";

const AddSpeaker = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the speaker data to be sent in the request
    const speakerData = {
      name,
      email,
    };

    try {
      // Send POST request to add the speaker
      const response = await axios.post("http://127.0.0.1:8000/events/add-speaker/", speakerData);

      console.log("Speaker Added:", response.data);
      alert("Speaker Added Successfully!");

      // Optionally, reset the form after submission
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding speaker:", error.response?.data?.message || "Something went wrong!");
      alert("Failed to add speaker. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Add Speaker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Speaker Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Speaker Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Speaker</button>
      </form>
      <p>
        <Link to="/" className="switch-link">
          Go back to Login.
        </Link>
      </p>
    </div>
  );
};

export default AddSpeaker;
