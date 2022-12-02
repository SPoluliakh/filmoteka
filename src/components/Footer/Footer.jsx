import * as SC from './Footer.styled';
import SV from '../../Utils/Sergii_Poluliakh_frontend developer.pdf';

export const Footer = () => {
  return (
    <>
      <SC.Footer>
        <SC.FooterContainer>
          <SC.FooterInnerWrap>
            <SC.FooterText>© 2022 | All Rights Reserved |</SC.FooterText>
            <SC.FooterLink href={SV} target="_blank">
              Developers info
            </SC.FooterLink>
          </SC.FooterInnerWrap>
        </SC.FooterContainer>
      </SC.Footer>
    </>
  );
};
