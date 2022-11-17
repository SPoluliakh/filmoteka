import { Suspense } from 'react';
import { useState, useEffect, useRef } from 'react';
import { fetchById } from 'Utils/Fetch';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { LinkTo } from 'components/Link/Link';
import { Box } from 'Utils/Box';
import Spiner from 'components/Spiner/Spiner';
import { NoInfoText } from '../components/NoInfo/NoInfo';

export const FilmDetails = () => {
  const [loader, setLoader] = useState(null);
  const [filmDetails, setFilmDetails] = useState(null);
  const { filmId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const backLocation = useRef(backLinkHref);

  useEffect(() => {
    setLoader('pending');
    fetchById(filmId)
      .then(data => {
        setFilmDetails(data);
        setLoader('resolve');
      })
      .catch(err => {
        console.log(err);
        setLoader('rejected');
      });
  }, [filmId]);

  if (!filmDetails) {
    return;
  }

  const { title, vote_average, overview, genres, poster_path } =
    filmDetails.data;
  return (
    <>
      {loader === 'pending' && <Spiner />}
      {loader === 'resolve' && (
        <Box as="main" pt={6}>
          <LinkTo path={backLocation.current}> Go back </LinkTo>
          <MovieCard
            title={title}
            popularity={vote_average}
            overview={overview}
            genres={genres}
            poster_path={poster_path}
            filmDetails={filmDetails}
          />
          <LinkTo path="cast"> Cast </LinkTo>
          <LinkTo path="reviews"> Reviews </LinkTo>
          <LinkTo path="trailers"> Trailers </LinkTo>

          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
      )}

      {loader === 'rejected' ||
        (!filmDetails.data && (
          <NoInfoText>
            There are no movies matching your search, please try another
            keyword.
          </NoInfoText>
        ))}
    </>
  );
};
