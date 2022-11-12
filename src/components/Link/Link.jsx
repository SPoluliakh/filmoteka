import * as SC from './Link.styled';
import PropTypes from 'prop-types';

export const LinkTo = ({ path, children }) => {
  return <SC.LinkTo to={path}> {children}</SC.LinkTo>;
};

LinkTo.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
};
