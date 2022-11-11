import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../Utils/Fetch';
import * as SC from './Cast.styled';
import NoImg from '../../components/NoImg/sad-cat-15.jpg';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    fetchCast(filmId).then(setCastInfo);
  }, [filmId]);

  if (!castInfo) return;

  const { cast } = castInfo.data;
  return (
    <SC.CastList>
      {cast.map(({ credit_id, name, profile_path, character }) => (
        <li key={credit_id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original/${profile_path}`
                : NoImg
            }
            alt={name}
            style={{ width: '200px' }}
          />
          <SC.CastInfoWrap>
            <SC.CastInfoTitle> {name} </SC.CastInfoTitle>
            <SC.CastInfoText> {character} </SC.CastInfoText>
          </SC.CastInfoWrap>
        </li>
      ))}
    </SC.CastList>
  );
};
