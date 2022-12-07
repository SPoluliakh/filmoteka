import { useState, useRef } from 'react';
import { FavoriteMovieList } from 'components/FavoriteMovieList/FavoriteMoviesList';
import { NoInfoText } from '../components/NoInfo/NoInfo';
import { Box } from 'Utils/Box';

export const Favorite = () => {
  const favorite = useRef('myFilms');
  const [favoriteMovies] = useState(() => {
    const data = JSON.parse(localStorage.getItem(favorite.current));

    return data ?? [];
  });

  return (
    <Box className="container" pt="43px" pb="13px">
      {favoriteMovies.length > 0 ? (
        <FavoriteMovieList list={favoriteMovies} />
      ) : (
        <NoInfoText> There is no favorite movies yet. </NoInfoText>
      )}
    </Box>
  );
};
