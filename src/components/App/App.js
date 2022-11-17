import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'Pages/Home';
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
const Review = lazy(() =>
  import('../Review/Review').then(module => ({
    ...module,
    default: module.Review,
  }))
);
const Trailers = lazy(() =>
  import('../Trailers/Trailers').then(module => ({
    ...module,
    default: module.Trailers,
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
          <Route path="trailers" element={<Trailers />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
