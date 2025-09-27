import styled from '@emotion/styled';



export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
`;

export const Section1 = styled.section`
scroll-margin-top: 100px;
  display: flex;
  align-items: center;
  gap: 2.2vw;
  padding: 0 clamp(20px, 10.6vw, 200px) 80px clamp(20px, 10.6vw, 200px);
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    padding-right: 16px;
  }
`;

export const Section1Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 42.36vw;
  padding-top: 4.5vw;
  gap: 2vw;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    width: 350px;
    justify-content: left;
    gap: 53px;
  }
  @media (max-width: 375px) {
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4vw;

  @media (max-width: 375px) {
    gap: 25px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 2.4375rem;
  font-family: AvantGardeGothicCBook, sans-serif;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.02em;

  @media (min-width: 376px) and (max-width: 768px) {
    display: none;
  }

  @media (max-width: 375px) {
    font-size: 22px;
    margin-top: -10px;
  }
`;
export const StyledH1Tablett = styled.h1`
  font-size: 2.4375rem;
  font-family: AvantGardeGothicCBook, sans-serif;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.02em;
  display: none;
  margin-top: -50px;
  padding-left: 32px;
  padding-right: 32px;

  @media (min-width: 376px) and (max-width: 768px) {
    display: block;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 1.75rem;
  font-family: AvantGardeGothicCBook, sans-serif;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.03em;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 0.6;
  }

  @media (max-width: 375px) {
    font-size: 19px;
  }
`;

export const StyledSpan = styled.span`
  display: none;

  @media (min-width: 376px) and (max-width: 768px) {
    display: block;
  }
`;

export const StyledSpanDesktop = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledSpanMobile = styled.span`
  display: none;
  @media (max-width: 375px) {
    display: block;
  }
`;

export const Section1InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125vw;

  @media (max-width: 768px) {
    gap: 55px;
  }
`;

export const ContainerP = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ContainerPTablett = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

export const ContainerPMobile = styled.div`
  display: none;
  margin-top: -28px;
  @media (max-width: 375px) {
    display: block;
  }
`;

export const StyledP = styled.p`
  font-size: 1.55rem;
  font-family: LatoLight, sans-serif;
  font-weight: 300;
  line-height: 1.19;
  letter-spacing: 0em;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 1.23;
  }

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.38vw;
  margin-top: 0.95vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonBox = styled.div`
  width: 273px;
`;

export const ButtonContainerTablett = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    margin-top: -23px;
  }
  @media (max-width: 375px) {
    width: 335px;
  }
`;

export const Section1Foto = styled.div`
  display: flex;
  gap: 1.73vw;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export const Section1FotoMobile = styled.div`
  display: none;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-top: -25px;
    gap: 35px;
  }
`;

export const ContainerFoto1 = styled.div`
  display: flex;
`;
export const Foto1 = styled.img`
  width: 436px;
  height: 474px;
  margin-top: 4.9vw;

  @media (max-width: 768px) {
    width: 300px;
    height: 327px;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

export const Foto1Mobile = styled.img`
  display: none;

  @media (max-width: 375px) {
    display: flex;
    width: 335px;
    height: 345px;
  }
`;

export const Foto2 = styled.img`
  @media (max-width: 768px) {
    width: 92px;
    height: 82px;
  }
  @media (max-width: 375px) {
    width: 105px;
    height: 100px;
  }
`;
export const ContainerFoto234 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  margin-top: 4.9vw;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
  @media (max-width: 375px) {
    gap: 10px;
    margin-top: 10px;
  }
`;

export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px clamp(20px, 10.6vw, 200px) 80px clamp(20px, 10.6vw, 200px);
  width: 100%;
  background-color: #f1ece6;
  @media (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    padding-right: 32px;
    padding-top: 60px;
  }
`;
export const Section2TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 375px) {
    gap: 20px;
  }
`;
export const StyledSection2H2 = styled.h2`
  font-size: 38px;
  font-family: AbrilFatface-Regulark, sans-serif;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;

  @media (max-width: 375px) {
    font-size: 22px;
  }
`;
export const StyledSection2P = styled.p`
  font-size: 25px;
  font-family: LatoLight, sans-serif;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: center;

  @media (max-width: 768px) {
    line-height: 0.6;
  }

  @media (max-width: 375px) {
    font-size: 18px;
    line-height: 1.2;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  gap: 50px;
  width: 100%;

  @media (max-width: 768px) {
    width: 595px;
    display: grid;
    grid-template-columns: repeat(2, 273px);
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    width: 100%;
  }
`;

export const Section3 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px clamp(20px, 10.6vw, 200px) 80px clamp(20px, 10.6vw, 200px);
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
    padding-top: 60px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    padding-right: 32px;
    padding-top: 60px;
  }
`;

export const Section3TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 48px;
  }

  @media (max-width: 375px) {
    gap: 20px;
  }
`;

export const ContainerAboutMe = styled.div`
  display: flex;
  gap: 98px;
  padding-top: 10px;

  @media (max-width: 768px) {
    width: 704px;
    gap: 25px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FotoButtonContainerTablett = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 375px) {
  }
`;

export const FotoAboutMe = styled.img`
  width: 490px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 375px) {
  }
`;

export const FotoAboutMeTablett = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 344px;
    height: 298px;
  }

  @media (max-width: 375px) {
  }
`;
export const ContainerAboutMeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 568px;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 0;
  }

  @media (max-width: 375px) {
    width: 335px;
  }
`;

export const AboutMeTitle = styled.h2`
  font-family: LatoBold, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 16px;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;
  text-transform: uppercase;
  text-align: start;
`;

export const AboutMeDescription = styled.p`
  font-family: LatoRegular, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: center;
  white-space: pre-line;
  text-align: start;

  @media (max-width: 768px) {
  }

  @media (max-width: 375px) {
  }
`;

export const ButtonBoxSection3 = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: 6px;

  @media (min-width: 376px) and (max-width: 768px) {
    display: none;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const ButtonBoxSection3Tablett = styled.div`
  display: none;

  @media (min-width: 376px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 375px) {
  }
`;

export const Section4Certificate = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px clamp(20px, 10.6vw, 200px) 80px clamp(20px, 10.6vw, 200px);
  width: 100%;
  background-color: #f1ece6;
  @media (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    padding-right: 0px;
    padding-left: 20px;
    padding-top: 60px;
  }
`;

export const Section5Map = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px clamp(20px, 10.6vw, 200px) 80px clamp(20px, 10.6vw, 200px);
  width: 100%;
 
  @media (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 0px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 60px;
  }
`;

export const MapAddressContainer = styled.div`
display: flex;
gap: 20px;
margin-top: 50px;
justify-content: center;

  @media (max-width: 375px) {
  flex-direction: column;
  align-items: center;
  
  }
`

export const AddressContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
 background-color: #f1ece6;
 border-radius: 10px;
 width: 295px;
 padding: 30px;
 gap: 30px;

   @media (max-width: 768px) {
   height: 460px;
  }
       @media (max-width: 768px) {
    width: 335px;
  }

`
    
export const ContactBox = styled.div`
display: flex;
flex-direction: column;

align-items: center;
gap: 10px;

  @media (max-width: 768px) {
  
  }
`
export const ContactTitle = styled.p`
 text-transform: uppercase;
  font-family: LatoBold, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 16px;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.00em;
  text-align: center;
  color: #261E1C;
`
export const ContactP = styled.p`
 font-family: LatoRegular, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.00em;
  text-align: center;
  white-space: pre-line;

`

export const ContactAddressP = styled.p`
 font-family: LatoRegular, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.00em;
  text-align: center;
  white-space: pre-line;

      &:hover {
    color: #AE9C96; 
   
  }
  `

  export const EmailA = styled.a`
  cursor: pointer;
  font-family: LatoRegular, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.00em;
  text-align: center;
  white-space: pre-line;

      &:hover {
    color: #AE9C96; 
   
  }
  `

export const MapBox = styled.div`
width: 925px;
height: 460px;

  @media (max-width: 768px) {
   height: 460px;
  width: 389px;
  }
         @media (max-width: 768px) {
    width: 335px;
  }
`

export const ContactPSocialMediaBox = styled.div`
display: flex;
gap: 10px;
align-items: center;
`