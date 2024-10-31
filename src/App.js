import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/home";
import List from "./List/list";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <h1> Our Top Rated Movies List</h1>
      </div>
      <nav
        className="hover-area"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {isVisible && (
          <ul className="list">
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/list">Movie List</Link>
            </li>
            <li>
              <Link to="/liked">Movies Liked</Link>
            </li>
            <li>
              <Link to="/blocked">Movies Blocked</Link>
            </li>
          </ul>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
