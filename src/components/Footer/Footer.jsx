import * as SC from './Footer.styled';
import SV from '../../Utils/Sergii_Poluliakh_frontend developer.pdf';
import { Box } from 'Utils/Box';

export const Footer = () => {
  return (
    <>
      <SC.Footer>
        <SC.FooterContainer>
          <SC.FooterInnerWrap>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <SC.FooterTextCertificateInfo>
                TMDB logo to identify your use of the TMDB APIs.
              </SC.FooterTextCertificateInfo>
              <SC.FooterTextCertificateInfo>
                "This product uses the TMDB API but is not endorsed or certified
                by TMDB."
              </SC.FooterTextCertificateInfo>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <SC.FooterText>© 2022 | All Rights Reserved |</SC.FooterText>
              <SC.FooterLink href={SV} target="_blank">
                About developer
              </SC.FooterLink>
            </Box>
          </SC.FooterInnerWrap>
        </SC.FooterContainer>
      </SC.Footer>
    </>
  );
};
