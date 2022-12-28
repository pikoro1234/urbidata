import Accordion from '../Components/Accordion'
import AccordionContadorItems from '../Components/AccordionContadorItems';
import Mapa from '../Components/Mapa';
import Navbar from '../Components/Navbar';
import { useEffect, useState } from "react";
import getAllNotificaciones from "../Servicios/ServNotificaciones"

const Avisos = () => {

        // generamos las varibles de estado para el manejo de las jardineras
        const [notificacion, setNotificacion] = useState([])

        // en una funcion asincrona recuperamos las jardineras del servicio y seteamos el estado de las jardineras
        async function initNotificaciones() {
            const data = await getAllNotificaciones()
            setNotificacion(data);        
        }
        
        // inicialisamos las jardineras al momento de ejecutarse el effect
        useEffect(() => {
            initNotificaciones()             
        }, []);
    return ( 
        <>
            <Navbar />        
            <div className="container-fluid">
                <div className="row">                    
                    <div className="col-lg-7 position-relative col-accordion">
                        <Accordion jardineras={notificacion } />
                        <AccordionContadorItems cantidad={notificacion.length} textCantidad="jardineras" />
                    </div>
                    <div className="col-lg-5 ps-1 padding-rigth-0 col-mapa">
                        <div id="map" className='position-relative'>                            
                            <Mapa jardineras={notificacion } />
                        </div>                        
                    </div>
                </div>
            </div> 
        </>        
     );
}
 
export default Avisos;