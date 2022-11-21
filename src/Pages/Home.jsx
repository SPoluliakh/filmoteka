import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetch, fetchByGenre } from 'Utils/Fetch';
import PaginatedItems from 'components/Pagination/Pagination';
import { TopMovies } from 'components/TopMovies/TopMovies';
import Spiner from 'components/Spiner/Spiner';
import { NoInfoText } from 'components/NoInfo/NoInfo';

export const Home = () => {
  const [loader, setLoader] = useState(null);
  const [topFilmsList, setTopFilmsList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get('page') ?? 1);
  const selectedPeriod = searchParams.get('period');
  const selectedGenre = searchParams.get('genre');
  const [period, setPeriod] = useState(selectedPeriod ?? 'day');
  const [genre, setGenre] = useState(selectedGenre ?? '1');

  useEffect(() => {
    setLoader('pending');

    if (genre === '1') {
      fetch(period, pageNumber)
        .then(data => {
          setTopFilmsList(data);
          setLoader('resolve');
        })
        .catch(err => {
          setLoader('rejected');
          console.log(err);
        });

      return;
    }
    fetchByGenre(genre, pageNumber)
      .then(data => {
        setTopFilmsList(data);
        setLoader('resolve');
      })
      .catch(err => {
        setLoader('rejected');
        console.log(err);
      });
  }, [pageNumber, period, genre]);

  const changePeriod = value => {
    setPeriod(value);
  };

  //
  const handleGenreChange = value => {
    setGenre(value);
  };

  if (!topFilmsList) {
    return;
  }

  const { results, total_pages } = topFilmsList.data;

  return (
    <>
      {loader === 'pending' && <Spiner />}
      {loader === 'resolve' && (
        <>
          <TopMovies
            list={results}
            onChangePeriod={changePeriod}
            period={period}
            genre={genre}
            onChangeGenre={handleGenreChange}
          />
          <PaginatedItems
            genre={genre}
            period={period}
            setPageNumber={setSearchParams}
            totalPages={Number(total_pages)}
            currentPage={pageNumber - 1}
          />
        </>
      )}
      {loader === 'rejected' ||
        (results.length === 0 && <NoInfoText> Bad request... </NoInfoText>)}
    </>
  );
};
