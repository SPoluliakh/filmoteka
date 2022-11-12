import * as SC from './NoInfo.styled';
import PropTypes from 'prop-types';

export const NoInfoText = ({ children }) => {
  return <SC.NoInfoText>{children}</SC.NoInfoText>;
};

NoInfoText.prototype = {
  children: PropTypes.node,
};
