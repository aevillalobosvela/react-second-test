import React from "react";

export default function MovieCard({ movie }) {
  function onFavoriteClick() {
    console.log("clicked");
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movie.url} alt={movie.title} />
          <div className="movie-overlay">
            <button className="favorite-btn" onClick={onFavoriteClick}>
              Add to favorite
            </button>
          </div>
        </div>
        <div className="movie-inf">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
      </div>
    </>
  );
}
