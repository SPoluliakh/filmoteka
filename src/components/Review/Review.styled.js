import styled from 'styled-components';

export const RevieWrap = styled.div`
  text-content: center;

  :not(:last-child) {
    padding-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ReviewTitle = styled.h3`
  color: ${p => p.theme.colors.navBcg};
  text-decoration: underline;
`;

export const ReviewText = styled.p`
  color: ${p => p.theme.colors.navBcg};
`;

export const NoInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
