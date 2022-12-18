import { useLocation } from 'react-router-dom';
import * as SC from './MovieList.Styled';
import NoImg from '../../components/NoImg/no-photo.png';
import PropTypes from 'prop-types';
import { imgWidth } from 'Utils/imgWidth';

export const MovieList = ({ list }) => {
  const location = useLocation();

  return (
    <div className="container">
      <section>
        <SC.MovieList>
          {list.map(
            ({ id, title, poster_path, vote_average, release_date }) => (
              <SC.ListItem key={id}>
                <SC.Link
                  to={location.pathname === '/' ? `movies/${id}` : `${id}`}
                  state={{ from: location }}
                >
                  <SC.ItemImg
                    loading="lazy"
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w${imgWidth}/${poster_path}`
                        : NoImg
                    }
                    alt={title}
                  />
                  <SC.ItemTitle>
                    {title} |
                    {release_date
                      ? release_date.slice(0, 4)
                      : 'no reliase data ifo'}
                  </SC.ItemTitle>
                </SC.Link>
                <SC.Rating>{vote_average.toFixed(2)}</SC.Rating>
              </SC.ListItem>
            )
          )}
        </SC.MovieList>
      </section>
    </div>
  );
};

MovieList.propTypes = {
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
