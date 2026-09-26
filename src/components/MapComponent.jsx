import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

export default function MapComponent({ latitude, longitude }) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      map.flyTo([latitude, longitude], 13);
    }
  }, [latitude, longitude, map]);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%', borderRadius: 'lg' }}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Você está aqui
        </Popup>
      </Marker>
    </MapContainer>
  );
}