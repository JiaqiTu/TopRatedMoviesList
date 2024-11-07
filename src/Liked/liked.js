import { useState } from "react";
// import "../List/list.css";
import "../Liked/liked.css";
import { MovieImg } from "../components/MovieImg";
import { MovieInfo } from "../components/MovieInfo";
import { PreferBtn } from "../components/PreferBtn";

function Liked({ liked, setLiked, disliked, setDisliked }) {
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
    setLiked(liked.filter((movie) => movie.id !== id));
  };
  return (
    <div className="movie-container">
      {/* Sort selector */}
      <div className="sort-options">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="title">Sort by Title</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>

      {sortedMovies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <MovieImg movie={movie} />
          <div className="movie-info">
            <MovieInfo movie={movie} />
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
            <PreferBtn
              type="disliked"
              movie={movie}
              liked={liked}
              setLiked={setLiked}
              disliked={disliked}
              setDisliked={setDisliked}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Liked;
