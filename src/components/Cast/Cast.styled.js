import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[2]}px;
`;

export const CastInfoWrap = styled.div`
  color: ${p => p.theme.colors.primary};
  margin-top: ${p => p.theme.space[3]}px;
`;

export const CastInfoTitle = styled.h3`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const CastInfoText = styled.p`
  margin: ${p => p.theme.space[0]}px;
`;
