import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Liked/liked.css";
import { MovieImg } from "../components/MovieImg";
import { MovieInfo } from "../components/MovieInfo";
import { PreferBtn } from "../components/PreferBtn";
import { selectLiked, removeLiked } from "../store/likedSlice";
import { useState } from "react";

function Liked() {
  const dispatch = useDispatch();
  const liked = useSelector(selectLiked);

  // State for sorting option
  const [sortOption, setSortOption] = useState("title");

  // Sort movies based on the selected sort option
  const sortedMovies = [...liked].sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title); // Sort alphabetically by name
    } else if (sortOption === "date") {
      return new Date(a.release_date) - new Date(b.release_date); // Sort by release date
    }
    return 0;
  });
  const handleDelete = (id) => {
    dispatch(removeLiked({ id }));
  };

  return (
    <>
      {/* Sort selector */}
      <div className="sort-container">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="title">Sort by Title</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>

      <div className="movie-container">
        {sortedMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <MovieImg movie={movie} />
            <div className="movie-info">
              <MovieInfo movie={movie} />
              <button onClick={() => handleDelete(movie.id)}>Delete</button>
              <PreferBtn type="disliked" movie={movie} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Liked;
