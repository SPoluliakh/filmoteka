import { Box } from 'Utils/Box';
import * as SC from './Genre.styled';
import PropTypes from 'prop-types';
import { genres } from 'Utils/Genres';

import { useSearchParams } from 'react-router-dom';

export const Genre = ({ genre, onChangeGenre, period }) => {
  const [, setSearchParams] = useSearchParams();

  const changeGenres = evt => {
    const choose = evt.target.value;
    onChangeGenre(choose);
    setSearchParams({ genre: choose, period: period });
  };

  return (
    <>
      <Box as="form" display="flex" alignItems="center" justifyContent="center">
        <SC.GenreText htmlFor="genre">GENRE </SC.GenreText>
        <SC.GenreSelect
          id="genre"
          name="genre"
          value={genre}
          onChange={changeGenres}
        >
          {genres.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </SC.GenreSelect>
      </Box>
    </>
  );
};

Genre.prototype = {
  onChangeGenre: PropTypes.func,
  period: PropTypes.string,
  genre: PropTypes.string,
};
