import { Global, css } from '@emotion/react';
import LatoRegular from '/src/assets/fonts/Lato-Regular.woff2'
import AvantGardeGothicCBook from '/src/assets/fonts/AvantGardeGothicCBook.woff2'
import LatoLight from '/src/assets/fonts/Lato-Light.woff2'

const globalStyles = css`
  * {
  box-sizing: border-box;
  }

   @font-face {
    font-family: 'LatoRegular';
    src: url(${LatoRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

     @font-face {
    font-family: 'AvantGardeGothicCBook';
    src: url(${AvantGardeGothicCBook}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

     @font-face {
    font-family: 'LatoLight';
    src: url(${LatoLight}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
    body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-size: 16px;

  }
`

  function GlobalStyles() {
  return <Global styles={globalStyles} />
}
  export default GlobalStyles;