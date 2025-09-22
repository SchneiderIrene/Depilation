import { useTranslation } from 'react-i18next';
import {
  AddressContainer,
  AddressIconContainer,
  AddressP,
  ContactContainer,
  Container,
  Footer,
  Header,
  HeaderContainer,
  IconContainer,
  IconMaps,
  LayoutComponent,
  LogoImg,
  LogoMenuContainer,
  Main,
  MenuContainer,
  MobileMenuIcon,
  StyledNavLink,
} from './styles';
// import { useLocation, useNavigate } from 'react-router-dom';
import IconSVG from '../../components/IconSVG/IconSVG';
import { IconFacebook, IconInstagram, IconInstagram2, IconTelegram, IconWhatsApp } from '../../assets';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import type { LayoutProps } from './types';




function Layout({ children }: LayoutProps) {
  // const navigate = useNavigate();
  // const location = useLocation();
  const { t } = useTranslation();





  return (
    <LayoutComponent>
    
      <Header>
        <Container>
            <HeaderContainer>
                <LogoMenuContainer>
          <LogoImg src="/src/assets/logo.png"></LogoImg>
          <MenuContainer>
            <StyledNavLink to={''}>{t('header.services')}</StyledNavLink>
            <StyledNavLink to={''}>{t('header.aboutMe')}</StyledNavLink>
            <StyledNavLink to={''}>{t('header.contact')}</StyledNavLink>
          </MenuContainer>
        </LogoMenuContainer>
        <ContactContainer>
            <AddressIconContainer>
            <AddressContainer>
                <IconMaps src='/src/assets/icon maps.png'/>
                <AddressP>Hardenstraße 51, 20539 Hamburg</AddressP> 
            </AddressContainer>
            <IconContainer>
        <IconSVG hidde path={IconTelegram}/>
        <IconSVG path={IconWhatsApp}/>
        <IconSVG path={IconInstagram} path2={IconInstagram2}/>
        <IconSVG hidde path={IconFacebook}/>
        <LanguageSwitcher/>
        <MobileMenuIcon src='/src/assets/Menu 21.svg'/>
            </IconContainer>
            </AddressIconContainer>            
        </ContactContainer>
            </HeaderContainer>
        
    </Container>
      </Header>
      <Main>
        <Container>
            {children}
            </Container>
            </Main>
      <Footer>
        <Container>
            
            </Container>
            </Footer>
    </LayoutComponent>
  );
}
export default Layout;
