import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"


export const CookieOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 9998;
`;


export const CookieBox = styled.div`
position: fixed;
  bottom: 10%; /* фиксируем внизу */
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 900px;
  height: 350px;
  padding: 16px;
  background-color: #F5F5F5;
  border-radius: 0.625rem;
  color:  #1d1715;
/* border: 0.07vw solid #7b6f6b; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  z-index: 2147; 
  

  @media (max-width: 1200px){
    
top: 30%;
left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 350px;
  padding: 16px;
  }
`

export const TextP = styled.p`
font-size: 1vw;
color:  #1d1715;;
line-height: 1.5;
text-align: justify;

@media (max-width: 480px){
    font-size: 0.8rem;
    line-height: 1.5;
}
`

export const ButtonBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1vw;
width: 100%;

  @media (max-width: 1000px){
    

gap: 8vw;
  }
`



export const SettingsLink = styled.a`
    text-decoration: none;
  cursor: pointer;
  color: #7b6f6b;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;
  font-family: LatoRegular, sans-serif;
  text-decoration: underline;

   &:hover {
    color: #AE9C96;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: #7b6f6b;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;
  font-family: LatoRegular, sans-serif;
  text-decoration: underline;

   &:hover {
    color: #AE9C96;
  }
`;
