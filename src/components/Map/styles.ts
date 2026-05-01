import styled from '@emotion/styled';
import { MapContainer } from 'react-leaflet';
import { Popup } from 'react-leaflet';

export const StyledMapContainer = styled(MapContainer)`
  height: 460px;
  width: 100%;
  border-radius: 5px;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    height: 460px;
    width: 389px;
  }

  @media (max-width: 430px) {
    width: 335px;
  }
`;
export const StyledA = styled.a`
  text-transform: uppercase;
  font-family: LatoBold, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 16px;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: center;
  color: #261e1c;
`;
export const StyledPopup = styled(Popup)`
  margin-left: 20px;
  font-family: LatoRegular, sans-serif;
  text-decoration: none;
  color: #1d1715;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: center;
  white-space: pre-line;
`;
