import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${p => p.theme.space[3]}px;
  margin-top: -${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[0]}px;
  justify-content: center;
`;

export const ListItem = styled.li`
  position: relative;
  flex-basis: calc(100% / 4 - ${p => p.theme.space[3]}px);
  margin-right: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;

 transition: box-shadow 250ms linear;
  :hover,
  :focus {
       box-shadow: 0 1px 4px red,
        -23px 0 30px -23px  red,
        23px 0 30px -23px  red,
        0 0 40px  red inset;
  }
 
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 530px;

  object-fit: cover;
  border-top-left-radius: ${p => p.theme.radii.normal};
  border-top-right-radius: ${p => p.theme.radii.normal};
`;

export const ItemTitle = styled.h2`
  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[3]}px;

  margin: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.s}px;
  text-decoration: none;
  color: ${p => p.theme.colors.primary};
  flex-grow: 1;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  box-shadow: ${p => p.theme.shadows.boxShadow};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Rating = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${p => p.theme.colors.activeText};
  color: ${p => p.theme.colors.navBcg};
  border-radius: ${p => p.theme.radii.ratingVew};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
