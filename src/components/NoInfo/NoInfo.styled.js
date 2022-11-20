import styled from 'styled-components';

export const NoInfoText = styled.p`
  color: ${p => p.theme.colors.navBcg};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  text-shadow: ${p => p.theme.shadows.textShadow};
  margin-top: ${p => p.theme.space[7]}px;
  text-align: center;
`;
