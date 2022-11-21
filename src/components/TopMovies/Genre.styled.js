import styled from 'styled-components';

export const GenreText = styled.label`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  text-shadow: ${p => p.theme.shadows.textShadow};
  margin-bottom: ${p => p.theme.space[2]}px;
  text-align: center;
  margin-right: ${p => p.theme.space[2]}px;
`;

export const GenreSelect = styled.select`
  font-family: inherit;
  color: ${p => p.theme.colors.navBcg};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  text-shadow: ${p => p.theme.shadows.textShadow};
  margin-bottom: ${p => p.theme.space[2]}px;
  text-align: center;
  background-color: black;
  border: none;
  border-bottom: 1px solid ${p => p.theme.colors.navBcg};
  outline: none;
  cursor: pointer;
`;
