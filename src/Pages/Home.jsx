import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const movies = [
    {
      id: 1,
      title: "Movie Title",
      release_date: "2020",
    },
    {
      id: 2,
      title: "Second Title",
      release_date: "2021",
    },
    {
      id: 3,
      title: "Third Title",
      release_date: "2022",
    },
    {
      id: 4,
      title: "Fourth Title",
      release_date: "2023",
    },
    {
      id: 5,
      title: "Fifth Title",
      release_date: "2024",
    },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    alert(search);
    setSearch("empty");
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
          <button type="submit">Search movie</button>
        </form>

        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
