import { Link } from "react-router-dom";

const BotonFlotante = (props) => {
    return ( 
        <>
            <Link to={props.enlace} className='btn-absolute-flotante-cols'>{props.texto}</Link>
        </>
    );
}
 
export default BotonFlotante;