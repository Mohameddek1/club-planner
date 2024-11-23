import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./styles/auth.css";

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [speakerIds, setSpeakerIds] = useState([]);
  const [speakers, setSpeakers] = useState([]);

  // Fetch available speakers from the API
  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/events/speakers");
        setSpeakers(response.data); // Save the speaker data to state
      } catch (error) {
        console.error("Error fetching speakers:", error);
        alert("Failed to load speakers.");
      }
    };

    fetchSpeakers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      title,
      date,
      time,
      location,
      budget: parseFloat(budget),
      speaker_ids: speakerIds, // The selected speaker IDs
    };
    console.log("Event Added:", eventData);

    // Call the API to add the event
    axios
      .post("http://127.0.0.1:8000/events/add-event/", eventData)
      .then((response) => {
        alert("Event Added Successfully!");
        console.log("Event response:", response.data);
      })
      .catch((error) => {
        console.error("Error adding event:", error);
        alert("Failed to add event.");
      });
  };

  const handleSpeakerChange = (e) => {
    const selectedSpeakers = Array.from(e.target.selectedOptions, (option) => parseInt(option.value));
    setSpeakerIds(selectedSpeakers);
  };

  return (
    <div className="auth-container">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Event Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <select multiple onChange={handleSpeakerChange}>
          {speakers.map((speaker) => (
            <option key={speaker.id} value={speaker.id}>
              {speaker.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Event</button>
      </form>
      <p>
        <Link to="/" className="switch-link">
          Go back to Login.
        </Link>
      </p>
    </div>
  );
};

export default AddEvent;
