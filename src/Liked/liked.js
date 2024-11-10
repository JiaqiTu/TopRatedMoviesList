import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieImg } from "../components/MovieImg";
import { MovieInfo } from "../components/MovieInfo";
import { PreferBtn } from "../components/PreferBtn";
import { selectLiked, removeLiked } from "../store/preferSlice";
import { useState } from "react";
function Liked() {
  const dispatch = useDispatch();
  const liked = useSelector(selectLiked);

  const handleDelete = (id) => {
    dispatch(removeLiked({ id }));
  };

  return (
    <div className="movie-container">
      {liked.map((movie) => (
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
  );
}

export default Liked;
