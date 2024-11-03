import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/home";
import List from "./List/list";
import Liked from "./Liked/liked";
import Blocked from "./Blocked/blocked";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);

  return (
    <>
      <div>
        <h1> Our Top Rated Movies List</h1>
      </div>
      <BrowserRouter>
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
        <a href="#" class="back-top-buttom">
          <span class="material-icons">
            <i class="fa-solid fa-arrow-up">TOP</i>
          </span>
        </a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/list"
            element={
              <List
                liked={liked}
                setLiked={setLiked}
                disliked={disliked}
                setDisliked={setDisliked}
              />
            }
          />
          <Route
            path="/liked"
            element={<Liked liked={liked} setLiked={setLiked} />}
          />
          <Route
            path="/blocked"
            element={<Blocked disliked={disliked} setDisliked={setDisliked} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
