import React, { useEffect, useState } from "react";
import "./list.css";
import { LikeBtn } from "../components/LikeBtn";
import { DislikeBtn } from "../components/DislikeBtn";
import { MovieInfo } from "../components/MovieInfo";
import { MovieImg } from "../components/MovieImg";

function List({ liked, setLiked, disLiked, setDisLiked }) {
  const [movies, setMovies] = useState([]);

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

  return (
    <>
      <h1>Popular Movies</h1>
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
