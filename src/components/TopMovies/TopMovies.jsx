import { Box } from 'Utils/Box';
import * as SC from './TopMovies.Styled';
import { MovieList } from 'components/MovieList/MovieList';

export const TopMovies = ({ list }) => {
  return (
    <Box as="main" pt={5}>
      <SC.MainTitle> The most popular per week </SC.MainTitle>
      <MovieList list={list} />
    </Box>
  );
};
