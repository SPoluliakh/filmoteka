import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../Fetch';
import NoImg from '../../components/NoImg/sad-cat-15.jpg';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    fetchCast(filmId).then(setCastInfo);
  }, [filmId]);

  if (!castInfo) return;

  const { cast } = castInfo.data;
  console.log(cast);
  return (
    <ul>
      {cast.map(({ credit_id, name, profile_path, character }) => (
        <li key={credit_id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original/${profile_path}`
                : NoImg
            }
            alt={name}
            style={{ width: '300px' }}
          />
          <h3> {name} </h3>
          <p> {character} </p>
        </li>
      ))}
    </ul>
  );
};
