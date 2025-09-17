import React from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await getPopularMovies();
        setMovies(response);
      } catch (err) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!search) return;
    if (loading) return;
  
    setLoading(true);
    try {
      const response = await searchMovies(search); 
      setMovies(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="search.."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error-message">Error: {error}</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
