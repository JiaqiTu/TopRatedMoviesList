function handleLike(movie, isDisliked, setLiked, disliked, setDisliked) {
  if (isDisliked) {
    setDisliked(
      disliked.filter((dislikedMovie) => dislikedMovie.id !== movie.id)
    );
  }
  setLiked((prevLiked) => [...prevLiked, movie]);
}

function handleDislike(movie, isLiked, liked, setLiked, setDisliked) {
  if (isLiked) {
    setLiked(liked.filter((likedMovie) => likedMovie.id !== movie.id));
  }
  setDisliked((prevDisliked) => [...prevDisliked, movie]);
}

export function PreferBtn({
  type,
  movie,
  liked,
  setLiked,
  disliked,
  setDisliked,
}) {
  const isLiked = liked.some((likedMovie) => likedMovie.id === movie.id);
  const isDisliked = disliked.some(
    (disLikedMovie) => disLikedMovie.id === movie.id
  );

  if (isLiked && type === "liked") {
    return <button disabled={true}>Like</button>;
  } else if (isDisliked && type === "disliked") {
    return <button disabled={true}>Dislike</button>;
  } else {
    return type === "liked" ? (
      <button
        onClick={() =>
          handleLike(movie, isDisliked, setLiked, disliked, setDisliked)
        }
      >
        Like
      </button>
    ) : (
      <button
        onClick={() =>
          handleDislike(movie, isLiked, liked, setLiked, setDisliked)
        }
      >
        Dislike
      </button>
    );
  }
}

// Second Design
// export function PreferBtn({
//   type,
//   movie,
//   liked,
//   setLiked,
//   disliked,
//   setDisliked,
// }) {
//   const isLiked = liked.some((likedMovie) => likedMovie.id === movie.id);
//   const isDisliked = disliked.some(
//     (disLikedMovie) => disLikedMovie.id === movie.id
//   );

//   if (isLiked ) {
//     return type === "liked" && <p style={{fontSize: "25px", color: "blue"}}>Liked!</p>
//   } else if(isDisliked){
//     return type === "disliked" && <p style={{fontSize: "25px", color: "blue"}}>Blocked</p>
//   } else {
//     return type === "liked" ? (
//       <button onClick={() => handleLike(movie, isDisliked, setLiked, disliked, setDisliked)}>Like</button>
//     ) : (
//       <button onClick={() => handleDislike(movie, isLiked, liked, setLiked, setDisliked)}>Dislike</button>
//     );
//   }
// }
