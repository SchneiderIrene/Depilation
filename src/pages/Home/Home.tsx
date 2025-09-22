import { useTranslation } from 'react-i18next';
import {
  ButtonBox,
  ButtonContainer,
  ButtonContainerTablett,
  ContainerFoto1,
  ContainerFoto234,
  ContainerP,
  ContainerPMobile,
  ContainerPTablett,
  Foto1,
  Foto1Mobile,
  Foto2,
  HomeContainer,
  Section1,
  Section1Foto,
  Section1FotoMobile,
  Section1Info,
  Section1InfoText,
  StyledH1,
  StyledH1Tablett,
  StyledH2,
  StyledP,
  StyledSpan,
  StyledTitle,
} from './styles';
import Button from '../../components/Button/Button';

function Home() {
  const { t } = useTranslation();
  return (
    <HomeContainer>
      <StyledH1Tablett>{t('home.section1.h1')}</StyledH1Tablett>
      <Section1>
        <Section1Info>
          <Section1InfoText>
            <StyledTitle>
              <StyledH1>{t('home.section1.h1')}</StyledH1>
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
                <Foto1 src="/src/assets/23a160ea-0f9b-4bef-ae5c-69a0f633d048 3.webp" />
                  <Foto1Mobile src="/src/assets/FotoMobile.webp" />
              </ContainerFoto1>
              <ContainerFoto234>
                <Foto2 src="/src/assets/1.webp" />
                <Foto2 src="/src/assets/3.webp" />
                <Foto2 src="/src/assets/4.webp" />
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
              <Button name={t('home.section1.button1')} bgColor />
              <Button name={t('home.section1.button2')} colorText />
            </ButtonContainerTablett>
          </Section1InfoText>
          <ButtonContainer>
            <ButtonBox>
              <Button name={t('home.section1.button1')} bgColor />
            </ButtonBox>
            <ButtonBox>
              <Button name={t('home.section1.button2')} colorText />
            </ButtonBox>
          </ButtonContainer>
        </Section1Info>
        <Section1Foto>
          <ContainerFoto1>
            <Foto1 src="/src/assets/23a160ea-0f9b-4bef-ae5c-69a0f633d048 3.webp" />
          </ContainerFoto1>
          <ContainerFoto234>
            <Foto2 src="/src/assets/1.webp" />
            <Foto2 src="/src/assets/3.webp" />
            <Foto2 src="/src/assets/4.webp" />
          </ContainerFoto234>
        </Section1Foto>
      </Section1>
    </HomeContainer>
  );
}
export default Home;
