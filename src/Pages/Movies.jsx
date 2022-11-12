import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { fetchByName } from 'Utils/Fetch';
import { MovieList } from 'components/MovieList/MovieList';
import { NoInfoText } from '../components/NoInfo/NoInfo';
import PaginatedItems from 'components/Pagination/Pagination';
import Spiner from 'components/Spiner/Spiner';

export const Movies = () => {
  const [loader, setLoader] = useState(null);
  const [name, setName] = useState('');
  const [movieList, setMovieList] = useState(null);
  const [seachParams, setSearchParams] = useSearchParams();
  const parametr = seachParams.get('query') ?? '';
  const pageNumber = Number(seachParams.get('page') ?? 1);

  useEffect(() => {
    if (parametr !== '') {
      setLoader('pending');
      fetchByName(parametr, pageNumber)
        .then(data => {
          setMovieList(data);
          setLoader('resolve');
        })
        .catch(err => {
          console.log(err);
          setLoader('rejected');
        });
      setName(parametr);
    }
  }, [parametr, pageNumber]);

  const handleSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
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
      {loader === 'pending' && <Spiner />}
      {loader === 'resolve' && movieList?.data.results.length > 0 && (
        <MovieList list={movieList.data.results} />
      )}
      {loader === 'resolve' && movieList?.data.results.length > 0 && (
        <PaginatedItems
          parametr={parametr}
          setPageNumber={setSearchParams}
          totalPages={Number(movieList.data.total_pages)}
          currentPage={pageNumber - 1}
        />
      )}
      {loader === 'rejected' ||
        (loader !== 'pending' && movieList?.data.results.length === 0 && (
          <NoInfoText>
            There are no movies matching your search, please try another
            keyword.
          </NoInfoText>
        ))}
    </>
  );
};
