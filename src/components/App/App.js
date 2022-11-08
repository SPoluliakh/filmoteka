import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { FilmDetails } from 'Pages/FilmDetails';
import { Cast } from 'components/Cast/Cast';
import { Review } from 'components/Review/Review';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:filmId" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
