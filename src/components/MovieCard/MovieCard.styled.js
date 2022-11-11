import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  justify-content: center;
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
