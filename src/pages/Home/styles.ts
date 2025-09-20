import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const Section1 = styled.section`
  display: flex;
  align-items: center;
  gap: 2.2vw;

  @media (max-width: 768px) {
    align-items: start;
    gap: 53px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
   
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
    font-size: 20px;
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
   font-size: 1.1rem;
  }
`;

export const StyledSpan = styled.span`
  display: none;

  @media (min-width: 376px) and (max-width: 768px) {
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
margin-top: -25px;
        @media (max-width: 375px) {
    display: block;
  }
`

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
    font-size: 17px;
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
    margin-top: -15px;
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
    margin-top: -40px;
    gap: 16px;
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
    @media (max-width: 376px) {
    display: none;
  }
`;

export const Foto1Mobile = styled.img`
display: none;

    @media (max-width: 375px) {
    display: block;
    width: 345px;
     height: auto;
  }
`

export const Foto2 = styled.img`
  @media (max-width: 768px) {
    width: 92px;
    height: 82px;
  }
    @media (max-width: 375px) {
    width: 97px;
    height: 92px;
  }
`;
export const ContainerFoto234 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 4.9vw;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
    @media (max-width: 375px) {
    gap: 10px;
  }
`;
