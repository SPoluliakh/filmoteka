import NoImg from '../../components/NoImg/no-photo-1.png';
import * as SC from './CastInfo.styled';
import PropTypes from 'prop-types';
import { imgWidth } from 'Utils/imgWidth';

export const CastInfo = ({ castInfo }) => {
  return (
    <SC.CastList>
      {castInfo.map(({ credit_id, name, profile_path, character }) => (
        <SC.CastListItem key={credit_id}>
          <SC.InnerWrap>
            <SC.ItemImg
              loading="lazy"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w${imgWidth}/${profile_path}`
                  : NoImg
              }
              alt={name}
            />
            <SC.CastInfoWrap>
              <SC.CastInfoTitle> {name} </SC.CastInfoTitle>
              <SC.CastInfoText> {character} </SC.CastInfoText>
            </SC.CastInfoWrap>
          </SC.InnerWrap>
        </SC.CastListItem>
      ))}
    </SC.CastList>
  );
};

CastInfo.prototype = {
  castInfo: PropTypes.array,
};
