// Add liked movie to liked list.
function handleLike(movie, setLiked) {
  setLiked((prevLiked) => [...prevLiked, movie]);
}

// Remove liked movie from liked list
function handleCancelLike(movie, liked, setLiked) {
  setLiked(liked.filter((likedMovie) => likedMovie.id !== movie.id));
}

export function LikeBtn({ movie, liked, setLiked }) {
  // Check if this movie is already in the liked list
  const isLiked = liked.some((likedMovie) => likedMovie.id === movie.id);

  return (
    <button
      onClick={() =>
        isLiked
          ? handleCancelLike(movie, liked, setLiked)
          : handleLike(movie, setLiked)
      }
    >
      {isLiked ? "Liked" : "Like"}
    </button>
  );
}
