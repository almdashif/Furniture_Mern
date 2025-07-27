// src/components/ContactMap.tsx
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Fix Leaflet marker icon issue in Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ContactMap: FC = () => {
  const position: [number, number] = [40.7128, -74.0060]; // New York City

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={position}>
        <Popup>
          <div style={{ textAlign: 'center' }}>
            <strong>Furniture Store</strong><br />
            123 Furniture Street<br />
            New York, NY 10001
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
