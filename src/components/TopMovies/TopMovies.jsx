import { Box } from 'Utils/Box';
import * as SC from './TopMovies.Styled';
import { MovieList } from 'components/MovieList/MovieList';
import PropTypes from 'prop-types';
import { Period } from './TopMoviesPeriod';

export const TopMovies = ({ list, onChangePeriod, period }) => {
  return (
    <Box as="main" pt={5}>
      <SC.MainTitle> The most popular per: </SC.MainTitle>
      <Period onChangePeriod={onChangePeriod} period={period} />
      <MovieList list={list} />
    </Box>
  );
};

TopMovies.prototype = {
  list: PropTypes.array,
};
