import { Box } from 'Utils/Box';
import * as SC from './TopMovies.Styled';
import PropTypes from 'prop-types';

import { useSearchParams } from 'react-router-dom';

const options = ['day', 'week'];

export const Period = ({ onChangePeriod, period }) => {
  const [, setSearchParams] = useSearchParams();

  const changeGenres = evt => {
    const choose = evt.target.value;
    onChangePeriod(choose);
    setSearchParams({ period: choose });
  };

  return (
    <>
      <Box as="form" display="flex" alignItems="center" justifyContent="center">
        {options.map(option => (
          <SC.OptionText key={option}>
            <SC.Radio
              type="radio"
              name="geners"
              value={option}
              checked={period === `${option}` ? true : false}
              onChange={changeGenres}
            />
            {option}
          </SC.OptionText>
        ))}
      </Box>
    </>
  );
};

Period.prototype = {
  onChangePeriod: PropTypes.func,
  period: PropTypes.string,
};
