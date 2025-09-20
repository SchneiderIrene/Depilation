
import styled from '@emotion/styled';


export const LanguageSwitcherIcon = styled.svg`
 width: 40px;
  color: #5B4F4B; // исходный цвет
  transition: color 0.3s;

    @media (max-width: 375px) {
    width: 35px;
  }

  &:hover {
    color: #AE9C96; // цвет при наведении
  }
`