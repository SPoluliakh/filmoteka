import * as SC from './FavoriteMovieList.style';
import PropTypes from 'prop-types';
import NoImg from '../../components/NoImg/no-photo.png';
import { useLocation } from 'react-router-dom';
import { imgWidth } from 'Utils/imgWidth';

export const FavoriteMovieList = ({ list }) => {
  const location = useLocation();

  return (
    <SC.MovieList>
      {list.map(data => (
        <SC.ListItem key={data.data.id}>
          <SC.Link to={`/movies/${data.data.id}`} state={{ from: location }}>
            <SC.ItemImg
              src={
                data.data.poster_path
                  ? `https://image.tmdb.org/t/p/w${imgWidth}/${data.data.poster_path}`
                  : NoImg
              }
              alt={data.data.title}
            />
            <SC.ItemTitle>{data.data.title}</SC.ItemTitle>
          </SC.Link>
          <SC.Rating>{data.data.vote_average.toFixed(2)}</SC.Rating>
        </SC.ListItem>
      ))}
    </SC.MovieList>
  );
};

FavoriteMovieList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
    })
  ),
};
