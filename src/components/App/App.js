import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'Pages/Home';

import { Review } from 'components/Review/Review';

const Movies = lazy(() =>
  import('../../Pages/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);

const FilmDetails = lazy(() =>
  import('../../Pages/FilmDetails').then(module => ({
    ...module,
    default: module.FilmDetails,
  }))
);
const Favorite = lazy(() =>
  import('../../Pages/Favorite').then(module => ({
    ...module,
    default: module.Favorite,
  }))
);
const Cast = lazy(() =>
  import('../Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="movies/:filmId" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
