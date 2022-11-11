import { useState, useRef, useEffect } from 'react';
import { FavoriteMovieList } from 'components/FavoriteMovieList/FavoriteMoviesList';

export const Favorite = () => {
  const favorite = useRef('myFilms');
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const data = JSON.parse(localStorage.getItem(favorite.current));

    return data ?? [];
  });

  return (
    <div>
      {favoriteMovies.length > 0 ? (
        <FavoriteMovieList list={favoriteMovies} />
      ) : (
        <div>Sorryyyyyy</div>
      )}
    </div>
  );
};
