import React, { useState, useEffect } from "react";

export function SortSelector({ setSortedMovies, movies }) {
  const [sortOption, setSortOption] = useState("sort");

  // Sort movies based on the selected sort option
  useEffect(() => {
    const sorted = [...movies].sort((a, b) => {
      if (sortOption === "sort") {
        return movies;
      } else if (sortOption === "title") {
        return a.title.localeCompare(b.title); // Sort alphabetically by name
      } else if (sortOption === "date") {
        return new Date(b.release_date) - new Date(a.release_date); // Sort by release date
      } else if (sortOption === "rate") {
        return b.vote_average - a.vote_average; // Sort by rating
      }
      return 0;
    });
    setSortedMovies(sorted); // Update sorted movies in parent component
  }, [sortOption, movies, setSortedMovies]);
  return (
    <div className="sort-container">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="sort">Sort</option>
        <option value="title">Sort by Title</option>
        <option value="date">Sort by Date</option>
        <option value="rate">Sort by Rating</option>
      </select>
    </div>
  );
}
