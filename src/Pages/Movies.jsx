import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { fetchByName } from 'components/Fetch';

export const Movies = () => {
  const [name, setName] = useState('');
  const [movieList, setMovieList] = useState(null);
  const [seachParams, setSearchParams] = useSearchParams();
  const parametr = seachParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (parametr !== '') {
      fetchByName(parametr).then(setMovieList);
    }
  }, [parametr]);

  const handleSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
    setName(value);
  };

  const handleFilterChange = value => {
    setName(value);
  };

  const clearFilter = () => {
    setName('');
    setSearchParams({});
  };

  console.log(movieList);
  return (
    <>
      <SearchBar
        value={name}
        onSubmit={handleSubmit}
        onChange={handleFilterChange}
        clearInput={clearFilter}
      />
      {movieList && (
        <ul>
          {movieList.data.results.map(({ original_title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
