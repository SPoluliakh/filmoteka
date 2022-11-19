import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetch } from 'Utils/Fetch';
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
  const [period, setPeriod] = useState(selectedPeriod ?? 'day');

  useEffect(() => {
    setLoader('pending');
    fetch(period, pageNumber)
      .then(data => {
        setTopFilmsList(data);
        setLoader('resolve');
      })
      .catch(err => {
        setLoader('rejected');
        console.log(err);
      });
  }, [pageNumber, period]);

  const changePeriod = value => {
    setPeriod(value);
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
          />
          <PaginatedItems
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
