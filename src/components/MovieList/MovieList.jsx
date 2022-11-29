import { useLocation } from 'react-router-dom';
import * as SC from './MovieList.Styled';
import NoImg from '../../components/NoImg/no-photo.png';
import PropTypes from 'prop-types';

export const MovieList = ({ list }) => {
  const location = useLocation();

  return (
    <SC.MovieList>
      {list.map(({ id, title, poster_path, vote_average }) => (
        <SC.ListItem key={id}>
          <SC.Link
            to={location.pathname === '/' ? `movies/${id}` : `${id}`}
            state={{ from: location }}
          >
            <SC.ItemImg
              loading="lazy"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : NoImg
              }
              alt={title}
            />

            <SC.ItemTitle>{title}</SC.ItemTitle>
          </SC.Link>
          <SC.Rating>{vote_average.toFixed(2)}</SC.Rating>
        </SC.ListItem>
      ))}
    </SC.MovieList>
  );
};

MovieList.prototype = {
  list: PropTypes.array,
};
