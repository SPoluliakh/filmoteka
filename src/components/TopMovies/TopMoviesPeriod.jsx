import { Box } from 'Utils/Box';
import * as SC from './TopMoviesPeriod.styled';
import PropTypes from 'prop-types';

import { useSearchParams } from 'react-router-dom';

const options = ['day', 'week'];

export const Period = ({ onChangePeriod, period, genre }) => {
  const [, setSearchParams] = useSearchParams();

  const changePeriod = evt => {
    const choose = evt.target.value;
    onChangePeriod(choose);
    setSearchParams({ genre: genre, period: choose });
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
              onChange={changePeriod}
            />
            per {option}
          </SC.OptionText>
        ))}
      </Box>
    </>
  );
};

Period.prototype = {
  onChangePeriod: PropTypes.func,
  period: PropTypes.string,
  genre: PropTypes.string,
};
