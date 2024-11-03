import { useState } from "react";
// import "../List/list.css";
import "../Liked/liked.css";
import { MovieImg } from "../components/MovieImg";
import { MovieInfo } from "../components/MovieInfo";
import { PreferBtn } from "../components/PreferBtn";

function Liked({ liked, setLiked, disliked, setDisliked }) {
  const handleDelete = (id) => {
    setLiked(liked.filter((movie) => movie.id !== id));
  };
  return (
    <div className="movie-container">
      {liked.map((movie) => (
        <div key={movie.id} className="movie-card">
          <MovieImg movie={movie} />
          <div className="movie-info">
            <MovieInfo movie={movie} />
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
            <PreferBtn type = "disliked" movie={movie} liked={liked} setLiked={setLiked} disliked={disliked}
                setDisliked={setDisliked}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Liked;
