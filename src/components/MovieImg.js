export function MovieImg({ movie, onClick }) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      className="movie-poster"
      onClick={onClick}
    />
  );
}
