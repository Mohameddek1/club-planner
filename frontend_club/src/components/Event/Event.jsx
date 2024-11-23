import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Event.css';  // You can define your styles here

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events when the component mounts
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
        alert('Failed to load events.');
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-container">
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Budget:</strong> ${event.budget}</p>
              <p><strong>Speakers:</strong> {event.speakers.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Event;
