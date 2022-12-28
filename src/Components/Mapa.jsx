import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from "react";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Mapa = (props) => {
        
    const [centerMapa, setCenterMapa] = useState([41.627645, 2.3373676])

    const changeDimensionMapa = () => {                               
        let colMapa = document.querySelector('.col-mapa')
        let colAcordion = document.querySelector('.col-accordion')
        colMapa.classList.toggle('col-lg-5')
        colMapa.classList.toggle('col-lg-12')
        colAcordion.classList.toggle('col-lg-7')
        colAcordion.classList.toggle('col-lg-0')
        colAcordion.classList.toggle('ocultar-icon')        
        colMapa.classList.toggle('ps-1')
        colMapa.classList.toggle('ps-0')
    }
    
    return ( 
        <>
            <div onClick={()=> changeDimensionMapa()} className="btn-toggle-expanded-mapa px-2 py-2">P</div>
            <MapContainer fullscreenControl={true} center={centerMapa} zoom={13} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {
                    props.jardineras.map((item, key) => ( 
                        <Marker position={[item.latitud, item.longitud]} key={key}>
                            <Popup>{item.id_jardinera} <br /> Easily customizable.</Popup>
                        </Marker>            
                    ))
                }                                
            </MapContainer>
        </>
    );
}
 
export default Mapa;