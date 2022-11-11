import { useState, useEffect, useRef } from 'react';
import { fetchById } from 'Utils/Fetch';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { LinkTo } from 'components/Link/Link';
import { Box } from 'components/Box';

export const FilmDetails = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const { filmId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const backLocation = useRef(backLinkHref);

  useEffect(() => {
    fetchById(filmId).then(setFilmDetails).catch(console.log);
  }, [filmId]);
  if (!filmDetails) {
    return;
  }

  const cast = 'cast';
  const reviews = 'reviews';
  const { title, popularity, overview, genres, poster_path } = filmDetails.data;
  return (
    <>
      <Box as="main" pt={6}>
        <LinkTo path={backLocation.current}> Go back </LinkTo>
        <MovieCard
          title={title}
          popularity={popularity}
          overview={overview}
          genres={genres}
          poster_path={poster_path}
          filmDetails={filmDetails}
        />
        <LinkTo path={cast}> Cast </LinkTo>
        <LinkTo path={reviews}> Reviews </LinkTo>

        <Outlet />
      </Box>
    </>
  );
};
