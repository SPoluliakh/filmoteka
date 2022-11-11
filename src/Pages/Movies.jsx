import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { fetchByName } from 'Utils/Fetch';
import { MovieList } from 'components/MovieList/MovieList';
import { NoInfoText } from '../components/NoInfo/NoInfo';
import PaginatedItems from 'components/Pagination/Pagination';

export const Movies = () => {
  const [name, setName] = useState('');
  const [movieList, setMovieList] = useState(null);
  const [seachParams, setSearchParams] = useSearchParams();
  const parametr = seachParams.get('query') ?? '';
  const pageNumber = Number(seachParams.get('page') ?? 1);

  console.log(pageNumber);

  useEffect(() => {
    if (parametr !== '') {
      fetchByName(parametr, pageNumber).then(setMovieList).catch(console.log);
    }
  }, [parametr, pageNumber]);

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
      {movieList && (
        <PaginatedItems
          parametr={parametr}
          setPageNumber={setSearchParams}
          totalPages={Number(movieList.data.total_pages)}
          currentPage={pageNumber - 1}
        />
      )}
      {parametr && movieList?.data.results.length === 0 && (
        <NoInfoText>
          There are no movies matching your search, please try another keyword.
        </NoInfoText>
      )}
    </>
  );
};
