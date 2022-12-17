import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import getAllJardineras from "../Servicios/ServJardineras"

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Mapa = () => {

    // generamos las varibles de estado para el manejo de las jardineras
    const [jardinera, setJardinera] = useState([])

    // en una funcion asincrona recuperamos las jardineras del servicio y seteamos el estado de las jardineras
    async function initJardineras() {
        const data = await getAllJardineras()
        setJardinera(data);
    }

    // inicialisamos las jardineras al momento de ejecutarse el effect
    useEffect(() => {
        initJardineras()     
    }, []);
    
    return ( 
        <MapContainer fullscreenControl={true} center={[41.3748878, 2.118446]} zoom={13} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {
                jardinera.map((item, key) => ( 
                    <Marker position={[item.latitud, item.longitud]} key={key}>
                        <Popup>{item.id_jardinera} <br /> Easily customizable.</Popup>
                    </Marker>            
                ))
            }
        </MapContainer>
    );
}
 
export default Mapa;