import styled from '@emotion/styled';

interface ButtonComponentStylesProps {
  disabled?: boolean;
  bgColor?: boolean;
  colorText?: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  gap: 8px;
  border-radius: 0.625rem;
  outline: none;
  border: 0.07vw solid #7b6f6b;
  background-color: ${({ bgColor }) => (bgColor ? '#7B6F6B' : 'transparent')};
  color: ${({ colorText }) => (colorText ? '#7B6F6B' : '#F5F5F5')};
  font-family: LatoRegular, sans-serif;
  text-decoration: none;
  font-size: clamp(18px, 2vw, 20px);
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.01rem;
  cursor: pointer;
  position: relative;
  

  :hover{
    background-color: ${({ bgColor }) => (bgColor ? '#AE9C96' : 'transparent')};
    border: 0.07vw solid #AE9C96;
    color: ${({ colorText }) => (colorText ? '#AE9C96' : '#F5F5F5')};
  }

    @media (max-width: 768px) {
  
  :hover{
    background-color: ${({ bgColor }) => (bgColor ? '#7B6F6B' : 'transparent')};
    border: 0.07vw solid #7b6f6b;
    color: ${({ colorText }) => (colorText ? '#7B6F6B' : '#F5F5F5')};
  }
  }

 
`;
