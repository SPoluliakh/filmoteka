import { useLocation } from 'react-router-dom';
import * as SC from './MovieList.Styled';
import NoImg from '../../components/NoImg/no-photo.png';

export const MovieList = ({ list }) => {
  const location = useLocation();

  return (
    <SC.MovieList>
      {list.map(({ id, title, poster_path }) => (
        <SC.ListItem key={id}>
          <SC.Link
            to={location.pathname === '/' ? `movies/${id}` : `${id}`}
            state={{ from: location }}
          >
            <SC.ItemImg
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : NoImg
              }
              alt={title}
            />

            <SC.ItemTitle>{title}</SC.ItemTitle>
          </SC.Link>
        </SC.ListItem>
      ))}
    </SC.MovieList>
  );
};
