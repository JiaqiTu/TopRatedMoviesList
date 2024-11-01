import React, { useEffect, useState } from "react";
import "./list.css";
import { LikeBtn } from "../components/LikeBtn";
import { DislikeBtn } from "../components/DislikeBtn";
import { MovieInfo } from "../components/MovieInfo";
import { MovieImg } from "../components/MovieImg";

function List({ liked, setLiked, disLiked, setDisLiked }) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async (props) => {
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

  const handlePreviousPage = () => {
    setCurrentPage((previous) => previous - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((previous) => previous + 1);
  };

  return (
    <>
      <h1>Popular Movies</h1>
      <div className="propagation">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <MovieImg movie={movie} />
            <div className="movie-info">
              <MovieInfo movie={movie} />
              <LikeBtn movie={movie} liked={liked} setLiked={setLiked} />
              <DislikeBtn
                movie={movie}
                disLiked={disLiked}
                setDisLiked={setDisLiked}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
