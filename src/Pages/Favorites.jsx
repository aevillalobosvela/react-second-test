import React from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites.length > 0) {
    return (
      <>
        <div className="favorites">
          <h2>Your favorites</h2>
        </div>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="favorites-empty">
        <h2>No favorites yet</h2>
      </div>
    </>
  );
}
