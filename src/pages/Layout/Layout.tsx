import { useTranslation } from 'react-i18next';
import {
  AddressContainer,
  AddressIconContainer,
  AddressP,
  CloseIcon,
  ContactContainer,
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
  MobileMenuContainer,
  MobileMenuIcon,
  StyledNavLink,
  StyledNavLinkMobileMenu,
} from './styles';
// import { useLocation, useNavigate } from 'react-router-dom';
import IconSVG from '../../components/IconSVG/IconSVG';
import {
  IconFacebook,
  IconInstagram,
  IconInstagram2,
  IconTelegram,
  IconWhatsApp,
} from '../../assets';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import type { LayoutProps } from './types';
import { useState } from 'react';
import ModalMenu from '../../components/ModalMenu/ModalMenu';

function Layout({ children }: LayoutProps) {
  // const navigate = useNavigate();
  // const location = useLocation();
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <LayoutComponent>
      <Header>
       
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
                  <IconMaps src="/src/assets/icon maps.png" />
                  <AddressP>Hardenstraße 51, 20539 Hamburg</AddressP>
                </AddressContainer>
                <IconContainer>
                  <IconSVG hidde path={IconTelegram} />
                  <IconSVG path={IconWhatsApp} />
                  <IconSVG path={IconInstagram} path2={IconInstagram2} />
                  <IconSVG hidde path={IconFacebook} />
                  <LanguageSwitcher />
                  <MobileMenuIcon src="/src/assets/Menu 21.svg" onClick={handleOpenModal} />
                  <ModalMenu isOpen={isModalOpen} onClose={handleCloseModal}>
                    <MobileMenuContainer>
                      <CloseIcon src='/src/assets/close.png' onClick={handleCloseModal}/>
                      <StyledNavLinkMobileMenu to={''}>{t('header.services')}</StyledNavLinkMobileMenu>
                      <StyledNavLinkMobileMenu to={''}>{t('header.aboutMe')}</StyledNavLinkMobileMenu>
                      <StyledNavLinkMobileMenu to={''}>{t('header.contact')}</StyledNavLinkMobileMenu>
                    </MobileMenuContainer>
                  </ModalMenu>
                </IconContainer>
              </AddressIconContainer>
            </ContactContainer>
          </HeaderContainer>
    
      </Header>
      <Main>
        {children}
      </Main>
      <Footer>
       
      </Footer>
    </LayoutComponent>
  );
}
export default Layout;
