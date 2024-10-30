import React, { useEffect, useState } from "react";
import "./list.css";

function List() {
  const [movies, setMovies] = useState([]);
  const [liked, setLiked] = useState();
  const url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c9408fb0c7908c0ad7066d910ff54c2";

  useEffect(() => {
    const fetchMovies = async (props) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
    function getPagedMovies(response, data) {
      if (data.results.length !== 0) {
        const nextPageUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c9408fb0c7908c0ad7066d910ff54c2&page=${
          data.page + 1
        }`;
        const response = fetch(nextPageUrl);
        const nextData = response.json();
        setMovies([...movies, ...nextData.results]);
      }
    }
  }, []);

  function getColor(vote) {
    if (vote >= 8) {
      return "green";
    }
    if (vote >= 5 && vote < 8) {
      return "yellow";
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
              <p className="rate" style={{ color: getColor(movie.id) }}>
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
