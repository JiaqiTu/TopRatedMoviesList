import React, { useEffect, useState } from "react";
import "./list.css";
import { MovieInfo } from "../components/MovieInfo";
import { MovieImg } from "../components/MovieImg";
import { PageBtn } from "../components/PageBtn";
import { PreferBtn } from "../components/PreferBtn";

function List() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async (props) => {
      try {
        let url;
        if (search) {
          url = `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=0c9408fb0c7908c0ad7066d910ff54c2&query=${search}&page=${currentPage}`;
        } else {
          url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c9408fb0c7908c0ad7066d910ff54c2&page=${currentPage}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [currentPage, search]);

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const handleSearchBox = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1>Popular Movies</h1>
      <div className="propagation">
        <PageBtn
          type="prev"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <span>{currentPage}</span>
        <PageBtn
          type="next"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <input
          className="SeachBox"
          type="text"
          placeholder="Search Movies"
          value={search}
          onChange={handleSearchBox}
        />
      </div>
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <MovieImg movie={movie} onClick={() => openModal(movie)} />
            <div className="movie-info">
              <MovieInfo movie={movie} />
              <PreferBtn type="liked" movie={movie} />
              <PreferBtn type="disliked" movie={movie} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMovie && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h2>{selectedMovie.title}</h2>
              <p>{selectedMovie.overview}</p>
              <p>Release Date: {selectedMovie.release_date}</p>
              <p>Rating: {selectedMovie.vote_average}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default List;
