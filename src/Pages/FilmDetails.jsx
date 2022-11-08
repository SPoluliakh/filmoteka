import { useState, useEffect } from 'react';
import { fetchById } from 'components/Fetch';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import NoImg from '../components/NoImg/sad-cat-15.jpg';

export const FilmDetails = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const { filmId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchById(filmId).then(setFilmDetails);
  }, [filmId]);
  if (!filmDetails) {
    return;
  }
  const backLinkHref = location.state?.from ?? '/';
  console.log(backLinkHref);
  const { title, popularity, overview, genres, poster_path } = filmDetails.data;
  return (
    <>
      <main>
        <Link to={backLinkHref}> Back to movies</Link>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : NoImg
          }
          alt={title}
          style={{ width: '300px' }}
        />
        <div>
          <h1>{title}</h1>
          <h2>Rating: </h2>
          <p>{popularity.toFixed(2)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(({ name }) => (
              <li key={name}> {name} </li>
            ))}
          </ul>
        </div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </main>
    </>
  );
};
