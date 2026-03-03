import styled from "@emotion/styled"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

`

export const ModalContent = styled.div`
position: fixed;
  bottom: 0%; /* фиксируем внизу */
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  width: 900px;
  padding: 16px;
  background-color: #F5F5F5;
  border-radius: 0.625rem;
  color:  #1d1715;
/* border: 0.07vw solid #7b6f6b; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 2147483647;

    @media (max-width: 1200px){
    
top: 0;
left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 350px;
  padding: 16px;
  }
`


export const  TextModel = styled.p`
 color: #7b6f6b;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;
  font-family: LatoRegular, sans-serif;

`

export const StyledInput = styled.input`
color: #7b6f6b;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;
  font-family: LatoRegular, sans-serif;
`

export const ModalContentBox = styled.div`
display: flex;
width: 100%;
flex-direction: column;
gap: 2vw;
align-items: center;

  @media (max-width: 1200px){
    
justify-content: center;
gap: 4vw;
  }
`
export const TextBox = styled.div`
display: flex;
width: 100%;
flex-direction: column;
gap: 1vw;
align-items: center;
  @media (max-width: 1200px){
    
justify-content: center;
gap: 4vw;
  }
`

export const StyledLabel = styled.label`
color: #7b6f6b;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;
  font-family: LatoRegular, sans-serif;
  accent-color: #7b6f6b;
`
