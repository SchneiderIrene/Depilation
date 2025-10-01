import '@splidejs/splide/dist/css/splide.min.css';
import { certificates } from 'data/certificate';
import {
  ArrowNavSVG,
  CarouselContainer,
  CertificateImg,
  StyledArrow,
  StyledSplide,
  StyledSplideSlide,
} from './styles';
import { useRef } from 'react';
import type { Splide as SplideType } from '@splidejs/splide'; // тип для рефа
function Carousel() {
  const splideRef = useRef<SplideType | null>(null);

  const goPrev = () => splideRef.current?.go('<');
  const goNext = () => splideRef.current?.go('>');

  return (
    <CarouselContainer>
      <StyledSplide
        options={{
          type: 'loop',
          perPage: 1,
          gap: '49px',
          focus: 'start',
          pagination: false,
          arrows: false,
          autoWidth: true,
          drag: true,
          breakpoints: {
            768: {
              gap: '30px',
            },
            430: {
              gap: '16px',
            },
          },
        }}
        aria-label="Certificates"
        ref={splideRef}
      >
        {certificates.map((cert) => (
          <StyledSplideSlide key={cert.id} portait={cert.type === 'portrait'}>
            <CertificateImg src={cert.src} alt={`Certificate ${cert.id}`} />
          </StyledSplideSlide>
        ))}
      </StyledSplide>
      <StyledArrow onClick={goPrev} left>
        <ArrowNavSVG>
          <path
            d="M27.137 28.698C27.0277 28.5886 27.0277 28.4113 27.137 28.302L31.182 24.257C31.5725 23.8665 31.5725 23.2335 31.182 22.843C30.7916 22.4525 30.1585 22.4525 29.768 22.843L24.6006 28.0104C24.3302 28.2808 24.3302 28.7192 24.6006 28.9895L29.768 34.157C30.1585 34.5475 30.7916 34.5475 31.182 34.157C31.5725 33.7665 31.5725 33.1335 31.182 32.743L27.137 28.698Z"
            stroke="currentColor"
            strokeWidth="0.1"
            fill="currentColor"
          />
          <rect
            x="-0.5"
            y="0.5"
            width="55"
            height="55"
            rx="9.5"
            transform="matrix(-1 0 0 1 55 0.5)"
            stroke="currentColor"
            fill="none"
          />
        </ArrowNavSVG>
      </StyledArrow>
      <StyledArrow onClick={goNext} right>
        <ArrowNavSVG>
          <path
            d="M28.8631 28.698C28.9724 28.5886 28.9724 28.4113 28.8631 28.302L24.8181 24.257C24.4276 23.8665 24.4276 23.2335 24.8181 22.843C25.2085 22.4525 25.8416 22.4525 26.2321 22.843L31.3995 28.0104C31.6699 28.2808 31.6699 28.7192 31.3995 28.9895L26.2321 34.157C25.8416 34.5475 25.2085 34.5475 24.8181 34.157C24.4276 33.7665 24.4276 33.1335 24.8181 32.743L28.8631 28.698Z"
            stroke="currentColor"
            strokeWidth="0.1"
            fill="currentColor"
          />
          <rect x="0.5" y="1" width="55" height="55" rx="9.5" stroke="currentColor" fill="none" />
        </ArrowNavSVG>
      </StyledArrow>
    </CarouselContainer>
  );
}

export default Carousel;
