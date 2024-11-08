import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLiked, addDisliked, selectLiked, selectDisliked } from "../store/preferSlice";

export function PreferBtn({ type, movie }) {
  const dispatch = useDispatch();
  const liked = useSelector(selectLiked);
  const disliked = useSelector(selectDisliked);

  //Determine if the current movie is already in the list
  const isLiked = liked.some((likedMovie) => likedMovie.id === movie.id);
  const isDisliked = disliked.some((dislikedMovie) => dislikedMovie.id === movie.id);

  const handleLike = () => {
    dispatch(addLiked(movie)); 
  };

  const handleDislike = () => {
    dispatch(addDisliked(movie)); 
  };

  //Determine the button type based on the provided type and handle the click event
  if (type === "liked") {
    return (
      <button onClick={handleLike} disabled={isLiked}>
        {isLiked ? "Liked" : "Like"}
      </button>
    );
  } else if (type === "disliked") {
    return (
      <button onClick={handleDislike} disabled={isDisliked}>
        {isDisliked ? "Disliked" : "Dislike"}
      </button>
    );
  }
}






// function handleLike(movie, isDisliked, setLiked, disliked, setDisliked) {
//   if (isDisliked) {
//     setDisliked(
//       disliked.filter((dislikedMovie) => dislikedMovie.id !== movie.id)
//     );
//   }
//   setLiked((prevLiked) => [...prevLiked, movie]);
// }

// function handleDislike(movie, isLiked, liked, setLiked, setDisliked) {
//   if (isLiked) {
//     setLiked(liked.filter((likedMovie) => likedMovie.id !== movie.id));
//   }
//   setDisliked((prevDisliked) => [...prevDisliked, movie]);
// }

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

  // if (isLiked && type === "liked") {
  //   return <button disabled={true}>Like</button>;
  // } else if (isDisliked && type === "disliked") {
  //   return <button disabled={true}>Dislike</button>;
  // } else {
  //   return type === "liked" ? (
  //     <button
  //       onClick={() =>
  //         handleLike(movie, isDisliked, setLiked, disliked, setDisliked)
  //       }
  //     >
  //       Like
  //     </button>
  //   ) : (
  //     <button
  //       onClick={() =>
  //         handleDislike(movie, isLiked, liked, setLiked, setDisliked)
  //       }
  //     >
  //       Dislike
  //     </button>
  //   );
  // }
// }
