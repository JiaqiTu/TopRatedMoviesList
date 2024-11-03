import "../List/list.css";
import { MovieImg } from "../components/MovieImg";
import { MovieInfo } from "../components/MovieInfo";
import { PreferBtn } from "../components/PreferBtn";

function Blocked({ liked, setLiked, disliked, setDisliked }) {
  const handleDelete = (id) => {
    setDisliked(disliked.filter((movie) => movie.id !== id));
  };
  return (
    <div className="movie-container">
      {disliked.map((movie) => (
        <div key={movie.id} className="movie-card">
          <MovieImg movie={movie} />
          <div className="movie-info">
            <MovieInfo movie={movie} />
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
            <PreferBtn type = "liked" movie={movie} liked={liked} setLiked={setLiked} disliked={disliked}
                setDisliked={setDisliked}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blocked;
