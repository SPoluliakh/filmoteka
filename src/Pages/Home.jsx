import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetch } from 'components/Fetch';

export const Home = () => {
  const [topFilmsList, setTopFilmsList] = useState(null);
  useEffect(() => {
    fetch().then(setTopFilmsList).catch(console.log);
  }, []);

  const location = useLocation();

  if (!topFilmsList) {
    return;
  }

  const { results } = topFilmsList.data;
  return (
    <>
      <ul>
        {results.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
