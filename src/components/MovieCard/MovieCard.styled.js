import styled from 'styled-components';

export const CardWrap = styled.div`
  padding-left: ${p => p.theme.space[7]}px;
  padding-right: ${p => p.theme.space[7]}px;
  display: flex;

  align-items: start;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const CardImg = styled.img`
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const CardTitle = styled.h1`
  margin: 0 0 ${p => p.theme.space[3]}px 0;
  color: ${p => p.theme.colors.description};
`;

export const CardSubTitle = styled.h2`
  margin: 0 0 ${p => p.theme.space[1]}px 0;
  color: ${p => p.theme.colors.description};
  font-size: ${p => p.theme.fontSizes.m}px;
`;

export const CardText = styled.p`
  margin: 0 0 ${p => p.theme.space[3]}px 0;
  color: ${p => p.theme.colors.description};
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const CardList = styled.ul`
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: 0 0 ${p => p.theme.space[5]}px 0;
  color: ${p => p.theme.colors.description};
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const AddButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  text-shadow: ${p => p.theme.shadows.textShadow};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.activeText};
  background-color: ${p => {
    return p.children === 'Add to Library'
      ? p.theme.colors.headerBcg
      : p.theme.colors.navBcg;
  }};

  transition: background-color 250ms linear;

  :hover {
    background-color: ${p => {
      return p.children === 'Add to Library'
        ? p.theme.colors.navBcg
        : p.theme.colors.headerBcg;
    }};
  }
`;
