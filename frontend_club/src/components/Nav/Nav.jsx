import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the token is available in localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // If token exists, set to true, else false
  }, []);

  return (
    <div className="navbar">
      <ul className="nav-links">
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/event">Upcoming Events</Link>
            </li>
            <li>
              <Link to="/add-speaker">Add Speaker</Link>
            </li>
            <li>
              <Link to="/add-event">Add Event</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
