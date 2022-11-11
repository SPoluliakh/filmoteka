import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../Utils/Fetch';
import * as SC from './Cast.styled';
import NoImg from '../../components/NoImg/no-photo.png';
import { NoInfoText } from 'components/NoInfo/NoInfo.styled';

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
      {cast?.length > 0 ? (
        cast.map(({ credit_id, name, profile_path, character }) => (
          <SC.CastListItem key={credit_id}>
            <SC.InnerWrap>
              <SC.ItemImg
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
            </SC.InnerWrap>
          </SC.CastListItem>
        ))
      ) : (
        <NoInfoText> Sorry, there is no cast info.</NoInfoText>
      )}
    </SC.CastList>
  );
};
