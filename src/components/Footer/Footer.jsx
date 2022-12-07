import * as SC from './Footer.styled';
import SV from '../../Utils/Sergii_Poluliakh_frontend developer.pdf';
import { Box } from 'Utils/Box';

export const Footer = () => {
  return (
    <>
      <SC.Footer>
        <SC.FooterContainer>
          <div>
            <Box display="flex" justifyContent="center" alignItems="center">
              <SC.FooterText>© 2022 | All Rights Reserved |</SC.FooterText>
              <SC.FooterLink href={SV} target="_blank">
                About developer
              </SC.FooterLink>
            </Box>
            <SC.FooterTextCertificateInfo>
              This site use the TMDB APIs.
            </SC.FooterTextCertificateInfo>
          </div>
        </SC.FooterContainer>
      </SC.Footer>
    </>
  );
};
