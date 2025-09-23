import styled from '@emotion/styled'

export const CardComponent = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
width: 273px;
`

export const CardFoto = styled.div`
display: flex;
flex-direction: column;
gap: 0;
border-radius:  10px;
`

export const StyledImg = styled.img`
width: 100%;
border-radius: 10px 10px 0 0;
`

export const TextBox = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
background-color: #FEFEFE;
border-radius:  0 0 10px 10px;
padding:  25px 5px;
`

export const StyledPTitle = styled.p`
 font-family: LatoBold, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 16px;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.00em;
  text-transform: uppercase;
  text-align: center;
`
export const StyledPDescription = styled.p`
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
export const ButtonBox = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

export const ArrowSVG = styled.svg`
color: inherit;
margin: 0;
width: 17px;
display: inline-block;
position: absolute;
top: 20px;
left: 33px;
`