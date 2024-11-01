import "../List/list.css";
import { MovieImg } from "../components/MovieImg";
import { MovieInfo } from "../components/MovieInfo";

function Liked({ liked, setLiked }) {
  return (
    <div className="movie-container">
      {liked.map((movie) => (
        <div key={movie.id} className="movie-card">
          <MovieImg movie={movie} />
          <div className="movie-info">
            <MovieInfo movie={movie} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Liked;
