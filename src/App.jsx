import "./App.css";
import MovieCard from "./Components/MovieCard";

function App() {
  return (
    <div>
      <MovieCard movie={{
        title: "Movie Name",
        url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
        year: 2023,
        poster: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        isFavorite: false
      }}/>
    </div>
  );
}

export default App;
