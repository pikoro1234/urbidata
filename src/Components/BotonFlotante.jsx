import { Link } from "react-router-dom";

const BotonFlotante = (props) => {
    return ( 
        <>
            <Link to={props.enlace} className='btn-absolute-flotante-cols btn-flotante-portadas'>{props.texto}</Link>
        </>
    );
}
 
export default BotonFlotante;