import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  flex: 1;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1440px; /* ограничение по макету */
  margin: 0 auto; /* центрирование */
  padding: 0 100px; /* внутренние отступы */

  @media (max-width: 768px) {
    padding: 0 32px;
  }


`;
export const Header = styled.header`
  background-color: #f1ece6;
  width: 100vw;
  padding: 25px 0;
  position: sticky;
  top: 0;
  z-index: 10;

    @media (max-width: 1200px) {
    width: 100%;
    
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 153px;
  align-items: center;
  width: 100%;

    @media (max-width: 768px) {
    gap: 20px;
  }

`;
export const LogoMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px;
  }

    @media (max-width: 375px) {
    gap: 0px;
  }

`;
export const MenuContainer = styled.div`
  display: flex;
 
  gap: 28px;

  @media (max-width: 768px) {
    gap: 25px;
  }

`;
export const StyledNavLink = styled(NavLink)`
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

  @media (max-width: 375px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  width:100px;
`;

export const AddressIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

export const IconMaps = styled.img`
  width: 20px;
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
  gap: 8px;

    @media (max-width: 768px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;

      @media (max-width: 375px) {
    gap: 10px;
  }
`;

export const MobileMenuIcon = styled.img`
display: none;

  @media (max-width: 375px) {
    display: block;
    width: 40px;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  width: 100%;
  min-height: 100vh;

    @media (max-width: 768px) {
    padding: 100px 0;
  }
    @media (max-width: 375px) {
    padding: 20px 0;
  }
`;

export const Footer = styled.footer`
  display: flex;

    @media (max-width: 768px) {
    padding: 100px 0;
  }
`;
