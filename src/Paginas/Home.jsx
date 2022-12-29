import Accordion from '../Components/Accordion'
import AccordionContadorItems from '../Components/AccordionContadorItems';
import Mapa from '../Components/Mapa';
import Navbar from '../Components/Navbar';
import { useEffect, useState } from "react";
import getAllJardineras from "../Servicios/ServJardineras"

const Home = () => {

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
        <>
            <Navbar />        
            <div className="container-fluid">
                <div className="row">                    
                    <div className="col-lg-7 position-relative col-accordion">
                        <Accordion jardineras={jardinera } accordion="jardineras" />
                        <AccordionContadorItems cantidad={jardinera.length} textCantidad="jardineras" />
                    </div>
                    <div className="col-lg-5 ps-1 padding-rigth-0 col-mapa">
                        <div id="map" className='position-relative'>                            
                            <Mapa jardineras={jardinera } />
                        </div>                        
                    </div>
                </div>
            </div> 
        </>              
    );
}
 
export default Home;