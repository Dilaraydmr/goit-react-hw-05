import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import MovieDetails from "../../pages/MovieDetails";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<h2>Sayfa Bulunamadı</h2>} />
      </Routes>
    </div>
  );
}

export default App;
