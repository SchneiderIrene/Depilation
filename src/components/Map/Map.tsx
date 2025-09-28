import { TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { StyledA, StyledMapContainer, StyledPopup } from './styles';
import { useTranslation } from 'react-i18next';

import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

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
