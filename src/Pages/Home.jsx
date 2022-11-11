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

  useEffect(() => {
    setLoader('pending');
    fetch(pageNumber)
      .then(data => {
        setTopFilmsList(data);
        setLoader('resolve');
      })
      .catch(err => {
        console.log(err);
        setLoader('rejected');
      });
  }, [pageNumber]);

  if (!topFilmsList) {
    return;
  }

  const { results, total_pages } = topFilmsList.data;

  return (
    <>
      {loader === 'pending' && <Spiner />}
      {loader === 'resolve' && (
        <>
          <TopMovies list={results} />
          <PaginatedItems
            setPageNumber={setSearchParams}
            totalPages={Number(total_pages)}
            currentPage={pageNumber - 1}
          />
        </>
      )}
      {loader === 'rejected' && <NoInfoText> Bad request... </NoInfoText>}
    </>
  );
};
