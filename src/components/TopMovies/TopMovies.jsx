import { Box } from 'Utils/Box';
import * as SC from './TopMovies.Styled';
import { MovieList } from 'components/MovieList/MovieList';
import PropTypes from 'prop-types';
import { Period } from './TopMoviesPeriod';
import { Genre } from './Genre';

export const TopMovies = ({
  list,
  onChangePeriod,
  period,
  genre,
  onChangeGenre,
}) => {
  return (
    <Box as="main" pt="94px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <SC.MainTitle> TOP MOVIES </SC.MainTitle>
        {genre === '1' && (
          <Period
            onChangePeriod={onChangePeriod}
            period={period}
            genre={genre}
          />
        )}
      </Box>

      <Genre genre={genre} onChangeGenre={onChangeGenre} period={period} />
      <MovieList list={list} />
    </Box>
  );
};

TopMovies.prototype = {
  list: PropTypes.array,
};
