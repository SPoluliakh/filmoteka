import styled from 'styled-components';

export const Footer = styled.footer`
  border-top: 2px solid navajowhite;
  width: 100vw;
`;

export const FooterContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const FooterInnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  color: navajowhite;
  font-size: 16px;
  line-height: 1.17;
  font-style: normal;
  font-weight: 400;
  text-align: center;

  :not(:last-child) {
    margin-right: 4px;
  }
`;

export const FooterLink = styled.a`
  font-family: inherit;
  font-size: 16px;
  line-height: 1.17;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;

  color: navajowhite;
  text-decoration: underline;

  :hover {
    scale: 1.2;
  }
`;
