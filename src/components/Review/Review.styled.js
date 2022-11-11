import styled from 'styled-components';

export const RevieWrap = styled.div`
  text-content: center;

  :not(:last-child) {
    padding-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ReviewTitle = styled.h3`
  color: ${p => p.theme.colors.primary};
  text-decoration: underline;
`;

export const ReviewText = styled.p`
  color: ${p => p.theme.colors.primary};
`;

export const NoInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NoInfoText = styled.p`
  color: ${p => p.theme.colors.primary};
`;
