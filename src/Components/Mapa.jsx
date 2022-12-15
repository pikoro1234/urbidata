import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Mapa = () => {
    return ( 
        <MapContainer fullscreenControl={true} center={[41.3748878, 2.118446]} zoom={13} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            <Marker position={[41.3748878, 2.118446]}>
                <Popup>Primero pretty CSS3 popup. <br /> Easily customizable.</Popup>
            </Marker>

            <Marker position={[41.3748458, 2.218446]}>
                <Popup>Segundo pretty CSS3 popup. <br /> Easily customizable.</Popup>
            </Marker>

        </MapContainer>
    );
}
 
export default Mapa;