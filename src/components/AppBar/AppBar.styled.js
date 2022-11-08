import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.ml}px;
  text-decoration: none;
  text-shadow: ${p => p.theme.shadows.textShadow};
  padding: ${p => p.theme.space[2]}px;

  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.activeText};
  }
  :hover:not(.active),
  :focus:not(.active) {
    background-color: ${p => p.theme.colors.hoverBcg};
    color: ${p => p.theme.colors.hoverText};
  }
`;
