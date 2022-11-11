import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { fetchByName } from 'Utils/Fetch';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const [name, setName] = useState('');
  const [movieList, setMovieList] = useState(null);
  const [seachParams, setSearchParams] = useSearchParams();
  const parametr = seachParams.get('query') ?? '';

  useEffect(() => {
    if (parametr !== '') {
      fetchByName(parametr).then(setMovieList).catch(console.log);
    }
  }, [parametr]);

  const handleSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
    setName(value); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  };

  const handleFilterChange = value => {
    setName(value);
  };

  const clearFilter = () => {
    setName('');
    setSearchParams({});
  };

  return (
    <>
      <SearchBar
        value={name}
        onSubmit={handleSubmit}
        onChange={handleFilterChange}
        clearInput={clearFilter}
      />
      {movieList && <MovieList list={movieList.data.results} />}
      {movieList?.data.results.length === 0 && <div> Soryyyyy</div>}
    </>
  );
};
