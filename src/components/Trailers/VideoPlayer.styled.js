import styled from 'styled-components';

export const VideoList = styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: -15px;
  margin-bottom: -15px;
`;

export const VideoItems = styled.li`
  flex-basic: calc(100% / 2 - 15px);
  margin-right: 15px;
  margin-bottom: 15px;
`;
