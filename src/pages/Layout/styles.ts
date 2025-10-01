import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #f1ece6;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px clamp(20px, 10.6vw, 200px);

  @media (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

    @media (max-width: 430px) {
    padding-left: 22px;
    padding-right: 22px;
  }
  
`;
export const LogoMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 430px) {
    gap: 0px;
  }
`;
export const MenuContainer = styled.div`
  display: flex;

  gap: 28px;

  @media (max-width: 768px) {
    gap: 18px;
  }
`;
export const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`;

export const CloseIcon = styled.img`
  width: 28px;
  color: #757975;
  margin-left: 70px;
`;

export const StyledHashLink = styled(HashLink)`
  font-family: LatoRegular, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  font-feature-settings:
    'liga' 1,
    'kern' 1;
  letter-spacing: 0.01em;

  :hover {
    color: #7b6f6b;
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

export const StyledHashLinkMobileMenu = styled(HashLink)`
  font-family: LatoRegular, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  font-feature-settings:
    'liga' 1,
    'kern' 1;
  letter-spacing: 0.01em;
`;

export const LogoImg = styled.img`
  width: 100px;

  :hover {
    filter: brightness(0.9);
  }

    @media (max-width: 430px) {
      width: 50px;
    }
`;

export const AddressIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

export const StyledARoute = styled.a`
text-decoration: none;
color: inherit;
`
export const IconMapsSVG = styled.svg`
  color: inherit;
  margin: 0;
  width: 17px;
  display: inline-block;
  position: absolute;
  top: -1px;
  left: -25px;
`;

export const AddressP = styled.p`
  font-family: LatoRegular, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  font-feature-settings:
    'liga' 1,
    'kern' 1;
  letter-spacing: 0em;

  &:hover {
    color: #ae9c96;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 36px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  color: black;
  position: relative;

  &:hover {
    color: #ae9c96;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
 

  @media (max-width: 430px) {
    gap: 10px;
  }
`;

export const MobileMenuIcon = styled.img`
  display: none;

  @media (max-width: 430px) {
    display: block;
    
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* min-height: 100vh; */

  @media (max-width: 768px) {
    padding: 65px 0;
  }
  @media (max-width: 430px) {
    padding: 20px 0;
  }
`;

export const Footer = styled.footer`
  background-color: #f1ece6;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 10px;

  @media (max-width: 768px) {
  }
`;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

   
`;
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 18px clamp(20px, 10.6vw, 200px);

  @media (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 0px;
  }
  @media (max-width: 430px) {
    /* padding-left: 50px;
    padding-right: 40px; */
    padding-bottom: 10px;
    padding-top: 10px;
    
  }
`;

export const MenuContainerFMobile = styled.div`
display: none;

   @media (max-width: 430px) {
    display: flex;
    gap: 15px;
    margin-top: 30px ;

  }
`

export const MenuContainerF = styled.div`
  display: flex;
  gap: 28px;

  @media (max-width: 768px) {
    gap: 35px;
  }
    @media (max-width: 430px) {
     display: none;

  }
`;

export const StyledHashLinkF = styled(HashLink)`
  font-family: LatoRegular, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  font-feature-settings:
    'liga' 1,
    'kern' 1;
  letter-spacing: 0.01em;

  :hover {
    color: #7b6f6b;
  }
`;

export const LogoMenuContainerF = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 40px;
  }

  @media (max-width: 430px) {

  }
`;

export const AddressIconContainerF = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

export const AdressContainerFTablett = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  @media (max-width: 430px) {
    margin-top: 25px;
  }
`;

export const ContactContainerF = styled.div`
  display: flex;
  gap: 36px;

  @media (max-width: 768px) {
    gap: 20px;
      
  }
    @media (max-width: 430px) {
    
  }
`;

export const IconContainerF = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 430px) {
    gap: 20px;
  }
`;

export const DatenschutzContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 122px;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledFooterP = styled.p`
  font-family: LatoRegular, sans-serif;
  text-decoration: none;
  color: #ae9c96;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;

  @media (max-width: 430px) {
    text-align: center;
    margin-top: -10px;
  }
`;

export const StyledFooterLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: #ae9c96;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;
  font-family: LatoRegular, sans-serif;
`;

export const DatenSchutzImpressumBox = styled.div`
  display: flex;
  gap: 122px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
