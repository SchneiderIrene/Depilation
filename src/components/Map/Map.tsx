import { TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { StyledA, StyledMapContainer, StyledPopup } from './styles';
import { useTranslation } from 'react-i18next';

function Map() {
  const position: [number, number] = [53.5363949, 10.0321941];
  const { t } = useTranslation();
  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;

  return (
    <StyledMapContainer center={position} zoom={10} attributionControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <StyledPopup>
          {' '}
          {t('map.location')} <br></br>
          <br></br>
          <StyledA href={googleMapsLink} target="_blank" rel="noopener noreferrer">
            {' '}
            {t('map.route')}
          </StyledA>
        </StyledPopup>
      </Marker>
    </StyledMapContainer>
  );
}

export default Map;
