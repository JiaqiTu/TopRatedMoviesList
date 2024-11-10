export function Modal({selectedMovie, setSelectedMovie}) {
  return (
    <div className="modal" onClick={()=>setSelectedMovie(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={()=>setSelectedMovie(null)}>
          &times;
        </span>
        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
          className="modal-image"
        />
        <div className="modal-info">
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.overview}</p>
          <p>Release Date: {selectedMovie.release_date}</p>
          <p>Rating: {selectedMovie.vote_average}</p>
        </div>
      </div>
    </div>
  );
}
