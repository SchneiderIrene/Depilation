import styled from '@emotion/styled';

export const DatenschutzContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  width: 100%;
  align-items: center;
`;

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  font-family: AbrilFatface-Regulark, sans-serif;
  align-items: left;
  justify-content: center;
  gap: 1.5vw;

  padding: 50px clamp(20px, 10.6vw, 200px) 80px clamp(20px, 10.6vw, 200px);
  width: 100%;

  @media (max-width: 1000px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
    padding-top: 0;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    padding-right: 16px;
  }
`;

export const TextTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 38px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.02em;

  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

export const TextSubTitle = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.02em;

  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

export const TextPstyled = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;

  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

export const TextBoxTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (max-width: 430px) {
    width: 100%;
  }
`;
