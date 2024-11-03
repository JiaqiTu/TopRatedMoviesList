import "../List/list.css";
import { MovieImg } from "../components/MovieImg";
import { MovieInfo } from "../components/MovieInfo";

function Blocked({disLiked, setDisLiked}){
  return (
    <div className="movie-container">
      {disLiked.map((movie) => (
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

export default Blocked;