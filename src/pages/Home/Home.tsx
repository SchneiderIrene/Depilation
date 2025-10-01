import { useTranslation } from 'react-i18next';
import {
  AboutMeDescription,
  AboutMeTitle,
  AddressContainer,
  ButtonBox,
  ButtonBoxSection3,
  ButtonBoxSection3Tablett,
  ButtonContainer,
  ButtonContainerTablett,
  CardContainer,
  ContactAddressP,
  ContactBox,
  ContactP,
  ContactPSocialMediaBox,
  ContactTitle,
  ContainerAboutMe,
  ContainerAboutMeText,
  ContainerFoto1,
  ContainerFoto234,
  ContainerP,
  ContainerPMobile,
  ContainerPTablett,
  EmailA,
  Foto1,
  Foto1Mobile,
  Foto2,
  FotoAboutMe,
  FotoAboutMeTablett,
  FotoButtonContainerTablett,
  HomeContainer,
  MapAddressContainer,
  MapBox,
  Section1,
  Section1Foto,
  Section1FotoMobile,
  Section1Info,
  Section1InfoText,
  Section2,
  Section2TitleContainer,
  Section3,
  Section3TitleContainer,
  Section4Certificate,
  Section5Map,
  StyledARoute,
  StyledH1,
  StyledH1Tablett,
  StyledH2,
  StyledP,
  StyledSection2H2,
  StyledSection2P,
  StyledSpan,
  StyledSpanDesktop,
  StyledSpanMobile,
  StyledTitle,
} from './styles';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import Carousel from 'components/Carousel/Carousel';
import IconSVG from 'components/IconSVG/IconSVG';
import {
  Foto,
  FotoAM,
  FotoAMTablett,
  FotoImg1,
  FotoImg2,
  FotoImg3,
  FotoM,
  IconFacebook,
  IconInstagram,
  IconInstagram2,
  IconTelegram,
  IconWhatsApp,
  ServiceImg1,
  ServiceImg2,
  ServiceImg3,
  ServiceImg4,
} from 'assets/index';
import Map from 'components/Map/Map';

function Home() {
  const { t } = useTranslation();
  return (
    <HomeContainer>
      <StyledH1Tablett>{t('home.section1.h1')}</StyledH1Tablett>
      <Section1 id="top">
<Section1Info>
          <Section1InfoText>
            <StyledTitle>
              <StyledH1>
                {t('home.section1.h1')}
                <StyledSpan>
                  <br></br>
                </StyledSpan>
                <StyledSpanDesktop/>{t('home.section1.h1.1')}
              </StyledH1>
              <StyledH2>
                {t('home.section1.h2.1')}
                <StyledSpan>
                  <br></br>
                </StyledSpan>
                {t('home.section1.h2.2')}
              </StyledH2>
            </StyledTitle>
            <Section1FotoMobile>
              <ContainerFoto1>
                <Foto1 src={Foto} />
                <Foto1Mobile src={FotoM} />
              </ContainerFoto1>
              <ContainerFoto234>
                <Foto2 src={FotoImg1} />
                <Foto2 src={FotoImg2} />
                <Foto2 src={FotoImg3} />
              </ContainerFoto234>
            </Section1FotoMobile>
            <ContainerP>
              <StyledP>{t('home.section1.p1')}</StyledP>
              <StyledP>{t('home.section1.p2')}</StyledP>
              <StyledP>{t('home.section1.p3')}</StyledP>
              <StyledP>{t('home.section1.p4')}</StyledP>
            </ContainerP>
            <ContainerPTablett>
              <StyledP>{t('home.section1Tablett.p1')}</StyledP>
              <StyledP>{t('home.section1Tablett.p2')}</StyledP>
              <StyledP>{t('home.section1Tablett.p3')}</StyledP>
              <StyledP>{t('home.section1Tablett.p4')}</StyledP>
              <StyledP>{t('home.section1Tablett.p5')}</StyledP>
              <StyledP>{t('home.section1Tablett.p6')}</StyledP>
            </ContainerPTablett>
            <ContainerPMobile>
              <StyledP>{t('home.section1Mobile.p1')}</StyledP>
              <StyledP>{t('home.section1Mobile.p2')}</StyledP>
              <StyledP>{t('home.section1Mobile.p3')}</StyledP>
              <StyledP>{t('home.section1Mobile.p4')}</StyledP>
              <StyledP>{t('home.section1Mobile.p5')}</StyledP>
            </ContainerPMobile>
            <ButtonContainerTablett>
              <StyledARoute
                href="https://t.me/+9Qo9jOszw8oxZTEy?fbclid=PAZXh0bgNhZW0CMTEAAadPyFbgioNgw2T8IHrgPrEApEfzMIneGpNtKH3nStrHKfZnCKR3fKAnhBM5_g_aem_Z5KMv5_GHOX6jOh0u4qZVA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button name={t('home.button1')} bgColor />
              </StyledARoute>
              <StyledARoute
                href="https://t.me/+9Qo9jOszw8oxZTEy?fbclid=PAZXh0bgNhZW0CMTEAAadPyFbgioNgw2T8IHrgPrEApEfzMIneGpNtKH3nStrHKfZnCKR3fKAnhBM5_g_aem_Z5KMv5_GHOX6jOh0u4qZVA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button name={t('home.button2')} colorText />
              </StyledARoute>
            </ButtonContainerTablett>
          </Section1InfoText>
          <ButtonContainer>
            <ButtonBox>
              <StyledARoute
                href="https://t.me/+9Qo9jOszw8oxZTEy?fbclid=PAZXh0bgNhZW0CMTEAAadPyFbgioNgw2T8IHrgPrEApEfzMIneGpNtKH3nStrHKfZnCKR3fKAnhBM5_g_aem_Z5KMv5_GHOX6jOh0u4qZVA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button name={t('home.button1')} bgColor />
              </StyledARoute>
            </ButtonBox>
            <ButtonBox>
              <StyledARoute
                href="https://t.me/+9Qo9jOszw8oxZTEy?fbclid=PAZXh0bgNhZW0CMTEAAadPyFbgioNgw2T8IHrgPrEApEfzMIneGpNtKH3nStrHKfZnCKR3fKAnhBM5_g_aem_Z5KMv5_GHOX6jOh0u4qZVA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button name={t('home.button2')} colorText />
              </StyledARoute>
            </ButtonBox>
          </ButtonContainer>
        </Section1Info>
        <Section1Foto>
          <ContainerFoto1>
            <Foto1 src={Foto} />
          </ContainerFoto1>
          <ContainerFoto234>
            <Foto2 src={FotoImg1} />
            <Foto2 src={FotoImg2} />
            <Foto2 src={FotoImg3} />
          </ContainerFoto234>
        </Section1Foto>

        

      </Section1>
      <Section2 id="services">
        <Section2TitleContainer>
          <StyledSection2H2>{t('home.section2.h2')}</StyledSection2H2>
          <StyledSection2P>
            {t('home.section2.p1')}
            <StyledSpan>
              <br></br>
            </StyledSpan>
            {t('home.section2.p2')}
          </StyledSection2P>
        </Section2TitleContainer>
        <CardContainer>
          <Card
            title={t('card.card1.title')}
            description={`${t('card.card1.description')}\n${t('card.card1.description_1')}`}
            srcImg={ServiceImg1}
            nameButton1={t('card.button1')}
            nameButton2={t('card.button2')}
          ></Card>
          <Card
            title={t('card.card2.title')}
            description={t('card.card2.description')}
            srcImg={ServiceImg2}
            nameButton1={t('card.button1')}
            nameButton2={t('card.button2')}
          ></Card>
          <Card
            title={t('card.card3.title')}
            description={t('card.card3.description')}
            srcImg={ServiceImg3}
            nameButton1={t('card.button1')}
            nameButton2={t('card.button3')}
          ></Card>
          <Card
            title={t('card.card4.title')}
            description={t('card.card4.description')}
            srcImg={ServiceImg4}
            nameButton1={t('card.button4')}
            nameButton2={t('card.button5')}
          ></Card>
        </CardContainer>
      </Section2>
      <Section3 id="aboutMe">
        <Section3TitleContainer>
          <StyledSection2H2>{t('home.section3.h2')}</StyledSection2H2>
          <StyledSection2P>
            {t('home.section3.p1')}
            <StyledSpan>
              <br></br>
            </StyledSpan>
            <StyledSpanMobile />
            {t('home.section3.p2')}
          </StyledSection2P>
          <ContainerAboutMe>
            <FotoAboutMe src={FotoAM} />
            <FotoButtonContainerTablett>
              <FotoAboutMeTablett src={FotoAMTablett} />
              <ButtonBoxSection3Tablett>
                <Button bgColor name={t('home.button1')} />
                <Button colorText name={t('home.button2')} />
              </ButtonBoxSection3Tablett>
            </FotoButtonContainerTablett>
            <ContainerAboutMeText>
              <AboutMeTitle>{t('home.section3.h2Description')}</AboutMeTitle>
              <AboutMeDescription>
                {t('home.section3.text1')}
                <StyledSpan />
                <StyledSpanMobile />
                {t('home.section3.text1_1')}
                <StyledSpan />
                <StyledSpanMobile />
                {t('home.section3.text1_2')}
              </AboutMeDescription>
              <AboutMeDescription>
                {t('home.section3.text2')}
                <StyledSpanDesktop>
                  <br></br>
                </StyledSpanDesktop>
                {t('home.section3.text2D')}
                <StyledSpan />
                <StyledSpanMobile />
                {t('home.section3.text2_1')}
                <StyledSpan />
                <StyledSpanMobile />
                {t('home.section3.text2_2')}
                <StyledSpanDesktop>
                  <br></br>
                </StyledSpanDesktop>
                <StyledSpan />
                <StyledSpanMobile />
                {t('home.section3.text2_3')}
              </AboutMeDescription>
              <AboutMeDescription>
                {t('home.section3.text3')}
                <StyledSpan />
                <StyledSpanMobile />
                {t('home.section3.text3_1')}
                <StyledSpan />
                <StyledSpanMobile />
                {t('home.section3.text3_2')}
              </AboutMeDescription>
              <ButtonBoxSection3>
                <Button bgColor name={t('home.button1')} />
                <Button colorText name={t('home.button2')} />
              </ButtonBoxSection3>
            </ContainerAboutMeText>
          </ContainerAboutMe>
        </Section3TitleContainer>
      </Section3>
      <Section4Certificate>
        <Section3TitleContainer>
          <StyledSection2H2>{t('home.section4.h2')}</StyledSection2H2>
          <StyledSection2P>
            {t('home.section4.p1')}
            <StyledSpan>
              <br></br>
            </StyledSpan>
            <StyledSpanMobile />
            {t('home.section4.p2')}
          </StyledSection2P>
        </Section3TitleContainer>
        <Carousel />
      </Section4Certificate>
      <Section5Map id="contacts">
        <Section3TitleContainer>
          <StyledSection2H2>{t('home.section5.h2')}</StyledSection2H2>
          <StyledSection2P>{t('home.section5.p')}</StyledSection2P>
        </Section3TitleContainer>
        <MapAddressContainer>
          <AddressContainer>
            <ContactBox>
              <ContactTitle> {t('home.section5.tel')}</ContactTitle>
              <StyledARoute href="tel:+491603212983" target="_blank" rel="noopener noreferrer">
                <ContactAddressP>+49 160 3212 983</ContactAddressP>
              </StyledARoute>
            </ContactBox>
            <ContactBox>
              <ContactTitle> {t('home.section5.address')}</ContactTitle>
              <ContactAddressP>
                Hardenstraße 51, <br></br> 20539 Hamburg
              </ContactAddressP>
            </ContactBox>
            <ContactBox>
              <ContactTitle> {t('home.section5.open')}</ContactTitle>
              <ContactP>{t('home.section5.appoint')}</ContactP>
            </ContactBox>
            <ContactBox>
              <ContactTitle> {t('home.section5.email')}</ContactTitle>
              <EmailA href="mailto:kontakt.bisnes@gmail.com" target="_blank">
                kontakt.bisnes@gmail.com
              </EmailA>
            </ContactBox>
            <ContactBox>
              <ContactTitle> {t('home.section5.socialMedia')}</ContactTitle>
              <ContactPSocialMediaBox>
                <IconSVG path={IconTelegram} />
                <IconSVG path={IconWhatsApp} />
                <IconSVG path={IconInstagram} path2={IconInstagram2} />
                <IconSVG path={IconFacebook} />
              </ContactPSocialMediaBox>
            </ContactBox>
          </AddressContainer>
          <MapBox>
            <Map />
          </MapBox>
        </MapAddressContainer>
      </Section5Map>
    </HomeContainer>
  );
}
export default Home;
