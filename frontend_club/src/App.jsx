import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddEvent from "./components/Event/AddEvent";
import AddSpeaker from "./components/Event/AddSpeaker";
import Event from "./components/Event/Event";
import Nav from './components/Nav/Nav'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Nav/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/add-speaker" element={<AddSpeaker />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
