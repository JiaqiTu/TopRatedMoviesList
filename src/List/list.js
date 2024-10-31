import React, { useEffect, useState, PaginationControls } from "react";
import "./list.css";

function List() {
  const [movies, setMovies] = useState([]);
  const [liked, setLiked] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c9408fb0c7908c0ad7066d910ff54c2";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c9408fb0c7908c0ad7066d910ff54c2&page=${currentPage}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((previousPage) => previousPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((previousPage) => previousPage - 1);
  };

  function getColor(vote) {
    if (vote >= 8) {
      return "green";
    }
    if (vote >= 5 && vote < 8) {
      return "orange";
    } else {
      return "red";
    }
  }

  const handleLikedMovie = () => {
    const likedMovie = {
      id: movies[0].id,
      title: movies[0].title,
      liked: true,
    };
    setMovies([likedMovie, ...movies]);
  };

  return (
    <>
      <h1>Popular Movies</h1>
      <div className="progation">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p
                className="rate"
                style={{ color: getColor(movie.vote_average) }}
              >
                Rating: {movie.vote_average.toFixed(1)}
              </p>
              <p>Release Date: {movie.release_date}</p>
              <p className="overview">{movie.overview}</p>
              <button>Like</button>
              <button>Dislike</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
