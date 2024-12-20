import React, { useEffect, useState } from "react";
import "./list.css";
import { MovieInfo } from "../components/MovieInfo";
import { MovieImg } from "../components/MovieImg";
import { PageBtn } from "../components/PageBtn";
import { PreferBtn } from "../components/PreferBtn";
import { useDispatch, useSelector } from "react-redux";
import { SearchBox } from "../components/SearchBox";
import { Modal } from "../components/Modal";
import { SortSelector } from "../components/SortSelector";

function List() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchBox, setSearch] = useState("");
  const [sortedMovies, setSortedMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  useEffect(() => {
    const fetchMovies = async (props) => {
      try {
        let url;
        if (searchBox) {
          url = `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=0c9408fb0c7908c0ad7066d910ff54c2&query=${searchBox}&page=${currentPage}`;
        } else {
          url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c9408fb0c7908c0ad7066d910ff54c2&page=${currentPage}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        dispatch(setMovies(data.results));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [currentPage, searchBox, dispatch]);

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSearchBox = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1>Popular Movies</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchBox}
        onChange={handleSearchBox}
        className="search-box"
      />
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
      </div>

      {/* Sort selector */}
      <SortSelector movies={movies} setSortedMovies={setSortedMovies} />

      <div className="movie-container">
        {sortedMovies.map((movie) => (
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
        <Modal
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </>
  );
}

export default List;
