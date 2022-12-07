import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.ml}px;
  text-decoration: none;
  text-shadow: ${p => p.theme.shadows.textShadow};
  padding: ${p => p.theme.space[2]}px;
  box-shadow: ${p => p.theme.shadows.boxShadow};
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 300ms linear;

  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
  &.active {
    background-color: ${p => p.theme.colors.navBcg};
    color: ${p => p.theme.colors.activeText};
  }
  :hover:not(.active),
  :focus:not(.active) {
    background-color: ${p => p.theme.colors.hoverBcg};
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-shadow: ${p => p.theme.shadows.boxShadow};
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.headerBcg};
  z-index: 10;
  overflow: hidden;
`;

export const Nav = styled.nav`
  padding-left: ${p => p.theme.space[5]}px;
  display: flex;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  padding-right: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.logoColor};
  font-size: ${p => p.theme.fontSizes.ml}px;
  text-decoration: none;
  text-shadow: ${p => p.theme.shadows.textShadow};
`;
