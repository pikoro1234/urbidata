import Accordion from '../Components/Accordion'
import AccordionContadorItems from '../Components/AccordionContadorItems';
import Mapa from '../Components/Mapa';
import Navbar from '../Components/Navbar';

const Home = () => {
    
    return ( 
        <>
            <Navbar />        
            <div className="container-fluid">
                <div className="row-mapa d-flex">                    
                    <div className="position-relative col-accordion w-50">
                        <Accordion />
                        <AccordionContadorItems cantidad="100" textCantidad="jardineras" />
                    </div>
                    <div className="ps-1 padding-rigth-0 col-mapa">
                        <div id="map" className='position-relative'>                            
                            <Mapa />
                        </div>                        
                    </div>
                </div>
            </div> 
        </>              
    );
}
 
export default Home;