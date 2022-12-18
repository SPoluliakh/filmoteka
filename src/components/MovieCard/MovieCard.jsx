import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setLocalStorage, getLocalStorage } from 'Utils/LocalStorage';
import NoImg from '../../components/NoImg/no-photo.png';
import * as SC from './MovieCard.styled';
import PropTypes from 'prop-types';

const favorite = 'myFilms';
export const MovieCard = ({
  genres,
  overview,
  popularity,
  title,
  poster_path,
  filmDetails,
  release_date,
}) => {
  const { filmId } = useParams();
  const [isInFavorite, setIsInFavorite] = useState(false);

  useEffect(() => {
    const savedMovies = getLocalStorage(favorite);
    if (
      savedMovies &&
      savedMovies.some(({ data }) => data.id === Number(filmId))
    ) {
      setIsInFavorite(true);
    }
  }, [filmId]);

  const AddToFavotite = () => {
    const isInFavorite = setLocalStorage(favorite, filmDetails);
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
              {title}{' '}
              {release_date
                ? `(${release_date.slice(0, 4)})`
                : 'no reliase data ifo'}
            </SC.CardTitle>
            <SC.CardSubTitle>Rating: </SC.CardSubTitle>
            <SC.CardText>{Math.round(popularity * 10)}%</SC.CardText>
            <SC.CardSubTitle>Overview: </SC.CardSubTitle>
            <SC.CardText>{overview ? overview : 'No info'}</SC.CardText>
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
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  overview: PropTypes.string,
  popularity: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  filmDetails: PropTypes.object,
  release_date: PropTypes.string,
};
