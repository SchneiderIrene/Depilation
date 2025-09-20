
import styled from '@emotion/styled';

interface IconSVGProps {
 $hidde?: boolean
}



export const IconSVGComponent = styled.svg<IconSVGProps>`
 width: 40px;
  color: #5B4F4B; // исходный цвет
  transition: color 0.3s;
  

  &:hover {
    color: #AE9C96; // цвет при наведении
   
  }

    @media (max-width: 375px) {
    display: ${({ $hidde }) => ($hidde ? 'none' : 'block')};
    width: 35px;
  }
`