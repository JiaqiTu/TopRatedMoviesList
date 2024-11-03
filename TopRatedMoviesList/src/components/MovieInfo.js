// Set color for different rating
function getColor(vote) {
  if (vote >= 8) {
    return "green";
  }
  if (vote >= 5 && vote < 8) {
    // return "yellow";
    return "orange";
  } else {
    return "red";
  }
}

export function MovieInfo({ movie }) {
  return (
    <>
      <h3>{movie.title}</h3>
      <p className="rate" style={{ color: getColor(movie.vote_average) }}>
        Rating: {movie.vote_average.toFixed(1)}
      </p>
      <p>Release Date: {movie.release_date}</p>
      <p className="overview">{movie.overview}</p>
    </>
  );
}
