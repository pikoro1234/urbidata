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

    const [centerMapa, setCenterMapa] = useState([-16.290154, -63.588653])

    // en una funcion asincrona recuperamos las jardineras del servicio y seteamos el estado de las jardineras
    async function initJardineras() {
        const data = await getAllJardineras()
        setJardinera(data);
    }

    // inicialisamos las jardineras al momento de ejecutarse el effect
    useEffect(() => {
        initJardineras()             
    }, []);

    const changeDimensionMapa = () => {              

        setCenterMapa([41.3927755, 2.0701489])
        
        console.log()
        let colMapa = document.querySelector('.col-mapa')
        let colAcordion = document.querySelector('.col-accordion')
        
        colMapa.style.width = '100%'
        colAcordion.style.width = '0%'
        colAcordion.classList.add('coultar-icon')
        colAcordion.classList.remove('w-50')
    }
    
    return ( 
        <>
            <div onClick={()=> changeDimensionMapa()} className="btn-toggle-expanded-mapa px-2 py-2">P</div>
            <MapContainer fullscreenControl={true} center={centerMapa} zoom={13} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {
                    jardinera.map((item, key) => ( 
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