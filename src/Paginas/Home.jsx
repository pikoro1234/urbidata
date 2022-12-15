import Accordion from '../Components/Accordion'
import AccordionContadorItems from '../Components/AccordionContadorItems';
import Mapa from '../Components/Mapa';
import Navbar from '../Components/Navbar';

const Home = () => {
    return ( 
        <>
            <Navbar />        
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 position-relative">
                        <Accordion />
                        <AccordionContadorItems cantidad="100" textCantidad="jardineras" />
                    </div>
                    <div className="col-lg-5 ps-1 padding-rigth-0">
                        <div id="map" className='position-relative'>
                            <div className="btn-toggle-expanded-mapa px-2 py-2">P</div>
                            <Mapa />
                        </div>                        
                    </div>
                </div>
            </div> 
        </>              
    );
}
 
export default Home;