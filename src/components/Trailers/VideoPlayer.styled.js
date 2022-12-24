import styled from 'styled-components';

export const VideoList = styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: -25px;
  margin-bottom: -25px;
`;

export const VideoItems = styled.li`
  flex-basis: calc(100% / 2 - 25px);
  margin-right: 25px;
  margin-bottom: 25px;
`;
