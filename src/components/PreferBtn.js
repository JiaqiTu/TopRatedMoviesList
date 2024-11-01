function handleLike(movie, setLiked) {
  setLiked((prevLiked) => [...prevLiked, movie]);
}

function handleDislike(movie, setDisliked) {
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

  if (isLiked || isDisliked) {
    return type === "liked" ? (
      <button disabled={true}>Like</button>
    ) : (
      <button disabled={true}>Dislike</button>
    );
  } else {
    return type === "liked" ? (
      <button onClick={() => handleLike(movie, setLiked)}>Like</button>
    ) : (
      <button onClick={() => handleDislike(movie, setDisliked)}>Dislike</button>
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
//       <button onClick={() => handleLike(movie, setLiked)}>Like</button>
//     ) : (
//       <button onClick={() => handleDislike(movie, setDisliked)}>Dislike</button>
//     );
//   }
// }
