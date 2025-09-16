import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="main content" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
