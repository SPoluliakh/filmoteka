import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkTo = styled(NavLink)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: ${p => p.theme.colors.primary};
  text-shadow: ${p => p.theme.shadows.textShadow};
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};

  &.active {
    color: ${p => p.theme.colors.headerBcg};
  }

  transition: color 300ms linear;
  :hover {
    color: ${p => p.theme.colors.headerBcg};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: ${p => p.theme.colors.headerBcg};
    scale: 0;
    transition: scale 300ms linear;
  }
  &:hover::after {
    scale: 1;
  }

  &.active::after {
    scale: 1;
  }

  & + a {
    margin-left: ${p => p.theme.space[3]}px;
  }
`;
