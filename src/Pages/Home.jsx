import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetch } from 'Utils/Fetch';
import PaginatedItems from 'components/Pagination/Pagination';
import { TopMovies } from 'components/TopMovies/TopMovies';

export const Home = () => {
  const [topFilmsList, setTopFilmsList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get('page') ?? 1);

  useEffect(() => {
    fetch(pageNumber).then(setTopFilmsList).catch(console.log);
  }, [pageNumber]);

  if (!topFilmsList) {
    return;
  }

  const { results, total_pages } = topFilmsList.data;

  return (
    <>
      <TopMovies list={results} />
      <PaginatedItems
        setPageNumber={setSearchParams}
        totalPages={Number(total_pages)}
        currentPage={pageNumber - 1}
      />
    </>
  );
};
