import { Box } from 'Utils/Box';
import * as SC from './TopMovies.Styled';
import { MovieList } from 'components/MovieList/MovieList';
import PropTypes from 'prop-types';

export const TopMovies = ({ list }) => {
  return (
    <Box as="main" pt={5}>
      <SC.MainTitle> The most popular per week </SC.MainTitle>
      <MovieList list={list} />
    </Box>
  );
};

TopMovies.prototype = {
  list: PropTypes.array,
};
