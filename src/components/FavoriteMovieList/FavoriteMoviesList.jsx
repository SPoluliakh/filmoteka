import * as SC from './FavoriteMovieList.style';

import NoImg from '../../components/NoImg/no-photo.png';

export const FavoriteMovieList = ({ list }) => {
  return (
    <SC.MovieList>
      {list.map(data => (
        <SC.ListItem key={data.data.id}>
          <SC.Link to={`/movies/${data.data.id}`}>
            <SC.ItemImg
              src={
                data.data.poster_path
                  ? `https://image.tmdb.org/t/p/original/${data.data.poster_path}`
                  : NoImg
              }
              alt={data.data.title}
            />
            <SC.ItemTitle>{data.data.title}</SC.ItemTitle>
          </SC.Link>
        </SC.ListItem>
      ))}
    </SC.MovieList>
  );
};
