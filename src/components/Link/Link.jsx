import * as SC from './Link.styled';

export const LinkTo = ({ path, children }) => {
  return <SC.LinkTo to={path}> {children}</SC.LinkTo>;
};
