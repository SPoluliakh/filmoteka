import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${p => p.theme.space[2]}px;
  margin-top: -${p => p.theme.space[2]}px;
`;

export const CastListItem = styled.li`
  flex-basis: calc(100% / 5 - ${p => p.theme.space[2]}px);
  margin-left: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[2]}px;

  display: flex;
  flex-direction: column;
`;

export const CastInfoWrap = styled.div`
  color: ${p => p.theme.colors.navBcg};
  padding-top: ${p => p.theme.space[2]}px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const CastInfoTitle = styled.h3`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const CastInfoText = styled.p`
  margin: ${p => p.theme.space[0]}px;
`;

export const ItemImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: ${p => p.theme.radii.normal};
  border-top-right-radius: ${p => p.theme.radii.normal};
`;

export const InnerWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
