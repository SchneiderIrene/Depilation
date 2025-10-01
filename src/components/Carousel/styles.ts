import styled from '@emotion/styled';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 924px;
  margin: 50px auto;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledSplide = styled(Splide)``;
interface SplideSplideStylesProps {
  portait?: boolean;
}
export const StyledSplideSlide = styled(SplideSlide, {
  shouldForwardProp: (prop) => prop !== 'portait',
})<SplideSplideStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ portait }) => (portait ? '273px' : '503px')};
  height: 358px;
`;

export const CertificateImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const ArrowNavSVG = styled.svg`
  margin: 0;
  color: #5b4f4b;
  transition: color 0.3s;

  &:hover {
    color: #ae9c96;
  }

`;

export const StyledArrow = styled.div<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 63%;
  transform: translateY(-50%);
  ${({ left }) => left && `left: -160px;`}
  ${({ right }) => right && `right: -160px;`} 
 width:60px;
  display: flex;
  margin: 0;
  padding: 0;

   @media (max-width: 768px) {
   display: none;
  }

   @media (max-width: 768px) {
  
  }
`;
