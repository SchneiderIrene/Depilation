import { useTranslation } from 'react-i18next';
import {
  AddressContainer,
  AddressIconContainer,
  AddressIconContainerF,
  AddressP,
  AdressContainerFTablett,
  CloseIcon,
  ContactContainer,
  ContactContainerF,
  DatenschutzContainer,
  DatenSchutzImpressumBox,
  Footer,
  FooterBox,
  FooterContainer,
  Header,
  HeaderContainer,
  IconContainer,
  IconContainerF,
  IconMapsSVG,
  LayoutComponent,
  LogoImg,
  LogoMenuContainer,
  LogoMenuContainerF,
  Main,
  MenuContainer,
  MenuContainerF,
  MobileMenuContainer,
  MobileMenuIcon,
  StyledFooterLink,
  StyledFooterP,
  StyledHashLink,
  StyledHashLinkF,
  StyledHashLinkMobileMenu,
} from './styles';
// import { useLocation, useNavigate } from 'react-router-dom';
import IconSVG from 'components/IconSVG/IconSVG';
import { IconFacebook, IconInstagram, IconInstagram2, IconTelegram, IconWhatsApp } from 'assets';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import type { LayoutProps } from './types';
import { useState } from 'react';
import ModalMenu from 'components/ModalMenu/ModalMenu';
import { StyledSpanMobile } from 'pages/Home/styles';
import { HashLink } from 'react-router-hash-link';

function Layout({ children }: LayoutProps) {

  const { t } = useTranslation();

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
            <HashLink smooth to="/#top">
              <LogoImg src="/src/assets/logo.png"></LogoImg>
            </HashLink>
            <MenuContainer>
              <StyledHashLink smooth to="/#services">
                {t('header.services')}
              </StyledHashLink>
              <StyledHashLink smooth to="/#aboutMe">
                {t('header.aboutMe')}
              </StyledHashLink>
              <StyledHashLink smooth to="/#contacts">
                {t('header.contact')}
              </StyledHashLink>
            </MenuContainer>
          </LogoMenuContainer>
          <ContactContainer>
            <AddressIconContainer>
              <AddressContainer>
                <IconMapsSVG>
                  <path
                    d="M9.49993 2.5C6.05379 2.5 3.2666 5.33787 3.2666 8.84667C3.2666 13.6067 9.49993 19.5 9.49993 19.5C9.49993 19.5 15.7333 13.6067 15.7333 8.84667C15.7333 5.33787 12.9461 2.5 9.49993 2.5ZM9.49993 11.1133C8.27108 11.1133 7.27374 10.0979 7.27374 8.84667C7.27374 7.59547 8.27108 6.58 9.49993 6.58C10.7288 6.58 11.7261 7.59547 11.7261 8.84667C11.7261 10.0979 10.7288 11.1133 9.49993 11.1133Z"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                  />
                </IconMapsSVG>
                <AddressP>Hardenstraße 51, 20539 Hamburg</AddressP>
              </AddressContainer>
              <IconContainer>
                <a
                  href="https://t.me/+9Qo9jOszw8oxZTEy?fbclid=PAZXh0bgNhZW0CMTEAAadPyFbgioNgw2T8IHrgPrEApEfzMIneGpNtKH3nStrHKfZnCKR3fKAnhBM5_g_aem_Z5KMv5_GHOX6jOh0u4qZVA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconSVG hidde path={IconTelegram} />
                </a>

                <a href="https://wa.me/491603212983" target="_blank" rel="noopener noreferrer">
                  <IconSVG path={IconWhatsApp} />
                </a>
                <a
                  href="https://www.instagram.com/s.a.s_shugaring_depilation?igsh=aHZubGc0dzV2M3dt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconSVG path={IconInstagram} path2={IconInstagram2} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <IconSVG hidde path={IconFacebook} />
                </a>
                <LanguageSwitcher />
                <MobileMenuIcon src="/src/assets/Menu 21.svg" onClick={handleOpenModal} />
                <ModalMenu isOpen={isModalOpen} onClose={handleCloseModal}>
                  <MobileMenuContainer>
                    <CloseIcon src="/src/assets/close.png" onClick={handleCloseModal} />
                    <StyledHashLinkMobileMenu smooth to="/#services">
                      {t('header.services')}
                    </StyledHashLinkMobileMenu>
                    <StyledHashLinkMobileMenu smooth to="/#aboutMe">
                      {t('header.aboutMe')}
                    </StyledHashLinkMobileMenu>
                    <StyledHashLinkMobileMenu smooth to="/#contacts">
                      {t('header.contact')}
                    </StyledHashLinkMobileMenu>
                  </MobileMenuContainer>
                </ModalMenu>
              </IconContainer>
            </AddressIconContainer>
          </ContactContainer>
        </HeaderContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterBox>
          <FooterContainer>
            <LogoMenuContainerF>
              <HashLink smooth to="/#top">
              <LogoImg src="/src/assets/logo.png"></LogoImg>
            </HashLink>
              <MenuContainerF>
                <StyledHashLinkF smooth to="/#services">
                  {t('header.services')}
                </StyledHashLinkF>
                <StyledHashLinkF smooth to="/#aboutMe">
                  {t('header.aboutMe')}
                </StyledHashLinkF>
                <StyledHashLinkF smooth to="/#contacts">
                  {t('header.contact')}
                </StyledHashLinkF>
              </MenuContainerF>
            </LogoMenuContainerF>
            <ContactContainerF>
              <AddressIconContainerF>
                <AddressContainer>
                  <IconMapsSVG>
                    <path
                      d="M9.49993 2.5C6.05379 2.5 3.2666 5.33787 3.2666 8.84667C3.2666 13.6067 9.49993 19.5 9.49993 19.5C9.49993 19.5 15.7333 13.6067 15.7333 8.84667C15.7333 5.33787 12.9461 2.5 9.49993 2.5ZM9.49993 11.1133C8.27108 11.1133 7.27374 10.0979 7.27374 8.84667C7.27374 7.59547 8.27108 6.58 9.49993 6.58C10.7288 6.58 11.7261 7.59547 11.7261 8.84667C11.7261 10.0979 10.7288 11.1133 9.49993 11.1133Z"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                    />
                  </IconMapsSVG>
                  <AddressP>Hardenstraße 51, 20539 Hamburg</AddressP>
                </AddressContainer>
                <IconContainerF>
                  <a
                    href="https://t.me/+9Qo9jOszw8oxZTEy?fbclid=PAZXh0bgNhZW0CMTEAAadPyFbgioNgw2T8IHrgPrEApEfzMIneGpNtKH3nStrHKfZnCKR3fKAnhBM5_g_aem_Z5KMv5_GHOX6jOh0u4qZVA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconSVG hidde path={IconTelegram} />
                  </a>

                  <a href="https://wa.me/491603212983" target="_blank" rel="noopener noreferrer">
                    <IconSVG path={IconWhatsApp} />
                  </a>
                  <a
                    href="https://www.instagram.com/s.a.s_shugaring_depilation?igsh=aHZubGc0dzV2M3dt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconSVG path={IconInstagram} path2={IconInstagram2} />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <IconSVG hidde path={IconFacebook} />
                  </a>
                </IconContainerF>
              </AddressIconContainerF>
            </ContactContainerF>
          </FooterContainer>
          <AdressContainerFTablett>
            <IconMapsSVG>
              <path
                d="M9.49993 2.5C6.05379 2.5 3.2666 5.33787 3.2666 8.84667C3.2666 13.6067 9.49993 19.5 9.49993 19.5C9.49993 19.5 15.7333 13.6067 15.7333 8.84667C15.7333 5.33787 12.9461 2.5 9.49993 2.5ZM9.49993 11.1133C8.27108 11.1133 7.27374 10.0979 7.27374 8.84667C7.27374 7.59547 8.27108 6.58 9.49993 6.58C10.7288 6.58 11.7261 7.59547 11.7261 8.84667C11.7261 10.0979 10.7288 11.1133 9.49993 11.1133Z"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </IconMapsSVG>
            <AddressP>Hardenstraße 51, 20539 Hamburg</AddressP>
          </AdressContainerFTablett>
          <DatenschutzContainer>
            <StyledFooterP>
              © 2025 Алина — косметолог & преподаватель |<StyledSpanMobile /> Все права
              защищены
            </StyledFooterP>
            <DatenSchutzImpressumBox>
              <StyledFooterLink to=''>Impressum</StyledFooterLink>
              <StyledFooterLink to='/datenschutz'>Datenschutz</StyledFooterLink>
            </DatenSchutzImpressumBox>
          </DatenschutzContainer>
        </FooterBox>
      </Footer>
      
    </LayoutComponent>
  );
}
export default Layout;
