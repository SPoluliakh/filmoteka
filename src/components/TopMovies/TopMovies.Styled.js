import styled from 'styled-components';

export const MainTitle = styled.h1`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  text-shadow: ${p => p.theme.shadows.textShadow};
  margin: ${p => p.theme.space[0]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  text-align: center;
`;
