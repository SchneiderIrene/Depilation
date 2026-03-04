import Button from '../Button/Button';
import {
  ButtonBox,
  CardComponent,
  CardFoto,
  StyledARoute,
  StyledImg,
  StyledPDescription,
  StyledPTitle,
  TextBox,
} from './styles';
import type { CardProps } from './types';

function Card({
  title,
  description,
  srcImg,
  nameButton1,
  nameButton2,
  button1Href,
  button1Target = "_blank",
}: CardProps) {
  return (
    <CardComponent>
      <CardFoto>
        <StyledImg src={srcImg} alt="img"/>
        <TextBox>
          <StyledPTitle>{title}</StyledPTitle>
          <StyledPDescription>{description}</StyledPDescription>
        </TextBox>
      </CardFoto>
      <ButtonBox>
        <StyledARoute href={button1Href} target={button1Target}  role="button">
<Button colorText>{nameButton1}</Button>

        </StyledARoute>
        
        <StyledARoute
          href="https://t.me/kontakt_AliS"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        >
          <Button bgColor>{nameButton2}</Button>
        </StyledARoute>
      </ButtonBox>
    </CardComponent>
  );
}

export default Card;
