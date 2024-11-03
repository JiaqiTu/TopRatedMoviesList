// Add dislike movie to dislike list
function handleDislike(movie, setDisLiked) {
  setDisLiked((prevDisliked) => [...prevDisliked, movie]);
}

// Remove dislike movie from dislike list
function handleCancelDislike(movie, disLiked, setDisLiked) {
  setDisLiked(
    disLiked.filter((disLikedMovie) => disLikedMovie.id !== movie.id)
  );
}

export function DislikeBtn({ movie, disLiked, setDisLiked }) {
  // Check if this movie is already in the disliked list
  const isDisliked = disLiked.some(
    (disLikedMovie) => disLikedMovie.id === movie.id
  );

  return (
    <button
      onClick={() =>
        isDisliked
          ? handleCancelDislike(movie, disLiked, setDisLiked)
          : handleDislike(movie, setDisLiked)
      }
    >
      {isDisliked ? "Disliked" : "Dislike"}
    </button>
  );
}
