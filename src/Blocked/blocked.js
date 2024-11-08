import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieImg } from "../components/MovieImg";
import { MovieInfo } from "../components/MovieInfo";
import { PreferBtn } from "../components/PreferBtn";
import { selectDisliked, removeDisliked } from "../store/likedSlice";

function Blocked() {
  const dispatch = useDispatch();
  const disliked = useSelector(selectDisliked);  

  const handleDelete = (id) => {
    dispatch(removeDisliked({ id })); 
  };

  return (
    <div className="movie-container">
      {disliked.map((movie) => (
        <div key={movie.id} className="movie-card">
          <MovieImg movie={movie} />
          <div className="movie-info">
            <MovieInfo movie={movie} />
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
            <PreferBtn type="liked" movie={movie} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blocked;