import { Link } from "react-router-dom";
import BotonFlotante from "../Components/BotonFlotante";

const PortadaCrearPerfil = () => {
    return ( 

        <div className="bg-green-dark container-fluid vw-100">
            <div className="row vh-100">
                <div className="col-lg-6 col-12 d-flex align-items-center position-relative">
                    <BotonFlotante enlace="/perfiles" texto="Atrás" />
                    <div className="content-card">
                        <h1 className="mb-5">Crea un nuevo perfil<br/>de Urbidata</h1>
                        <p className="">En esta sección podrás crear perfiles nuevos que interactúen<br/> con vuestras jardineras. Estos usuarios tendrán acceso a<br/> información pertinente al estado de las jardineras, su localización<br/> y análisis detallado de su rendimiento.</p>
                        
                        <Link to="/crear-perfiles" className=''>Empezar</Link>
                    </div>
                </div>
                <div className="col-lg-6 col-12 bg-fondo-relleno bg-cover"></div>
            </div>            
        </div>
    );
}
 
export default PortadaCrearPerfil;