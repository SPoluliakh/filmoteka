import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setLocalStorage, getLocalStorage } from 'Utils/LocalStorage';
import NoImg from '../../components/NoImg/no-photo.png';
import * as SC from './MovieCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({
  genres,
  overview,
  popularity,
  title,
  poster_path,
  filmDetails,
  release_date,
}) => {
  const favorite = useRef('myFilms');
  const { filmId } = useParams();
  const [isInFavorite, setIsInFavorite] = useState(false);

  useEffect(() => {
    const savedMovies = getLocalStorage(favorite.current);
    if (
      savedMovies &&
      savedMovies.some(({ data }) => data.id === Number(filmId))
    ) {
      setIsInFavorite(true);
    }
  }, [filmId]);

  const AddToFavotite = () => {
    const isInFavorite = setLocalStorage(favorite.current, filmDetails);
    setIsInFavorite(isInFavorite);
  };
  return (
    <div className="container">
      <section>
        <SC.CardWrap>
          <SC.CardImg
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : NoImg
            }
            alt={title}
            style={{ width: '300px' }}
          />
          <div>
            <SC.CardTitle>
              {title} {`(${release_date.slice(0, 4)})`}
            </SC.CardTitle>
            <SC.CardSubTitle>Rating: </SC.CardSubTitle>
            <SC.CardText>{Math.round(popularity * 10)}%</SC.CardText>
            <SC.CardSubTitle>Overview: </SC.CardSubTitle>
            <SC.CardText>{overview}</SC.CardText>
            <SC.CardSubTitle>Genres: </SC.CardSubTitle>
            <SC.CardList>
              {genres.map(({ name }) => (
                <li key={name}> {name} </li>
              ))}
            </SC.CardList>
            <SC.AddButton type="button" onClick={AddToFavotite}>
              {isInFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
            </SC.AddButton>
          </div>
        </SC.CardWrap>
      </section>
    </div>
  );
};

MovieCard.propTypes = {
  genres: PropTypes.array,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  filmDetails: PropTypes.object,
};
