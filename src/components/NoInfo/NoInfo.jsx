import * as SC from './NoInfo.styled';
import PropTypes from 'prop-types';
import Gif from '../NoImg/defoult-img.gif';

export const NoInfoText = ({ children }) => {
  return (
    <>
      <img
        src={Gif}
        alt="no info"
        style={{ width: '800px', margin: '120px auto 0 auto' }}
      ></img>
      <SC.NoInfoText>{children}</SC.NoInfoText>
    </>
  );
};

NoInfoText.prototype = {
  children: PropTypes.node,
};
