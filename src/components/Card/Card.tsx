import Button from '../Button/Button';
import {
  ArrowSVG,
  ButtonBox,
  CardComponent,
  CardFoto,
  StyledImg,
  StyledPDescription,
  StyledPTitle,
  TextBox,
} from './styles';
import type { CardProps } from './types';

function Card({title, description, srcImg, nameButton1, nameButton2}: CardProps) {
  return (
    <CardComponent>
      <CardFoto>
        <StyledImg src={srcImg} />
        <TextBox>
          <StyledPTitle>{title}</StyledPTitle>
          <StyledPDescription>
            {description}
          </StyledPDescription>
        </TextBox>
      </CardFoto>
      <ButtonBox>
        <Button colorText>
          <ArrowSVG>
            <path
              d="M15 9.61538L9 15M9 15L3 9.61538M9 15L9 0.999999"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 18.5L1 18.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </ArrowSVG>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{nameButton1}
        </Button>
        <Button bgColor>{nameButton2}</Button>
      </ButtonBox>
    </CardComponent>
  );
}

export default Card;
