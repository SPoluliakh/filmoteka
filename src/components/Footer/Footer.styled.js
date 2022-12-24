import styled from 'styled-components';

export const Footer = styled.footer`
  border-top: 0.8px solid navajowhite;
  width: 100vw;
  background-color: #ff000021;
  margin-top: 25px;
`;

export const FooterContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const FooterText = styled.p`
  color: ${p => p.theme.colors.navBcg};
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
  font-size: 16px;
  line-height: 1.17;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  color: ${p => p.theme.colors.navBcg};
  text-decoration: underline;
  transition: scale 250ms linear;

  :hover {
    scale: 1.1;
  }
`;

export const FooterTextCertificateInfo = styled.p`
  color: ${p => p.theme.colors.navBcg};
  font-size: 10px;
  line-height: 1.17;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
`;
