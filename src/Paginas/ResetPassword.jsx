import { Link } from "react-router-dom";
import LogoFlotante from "../Components/LogoFlotante";

const ResetPassword = () => {
    return (  
        <div className="bg-green-dark container-fluid vw-100">
            <div className="row vh-100">
                <div className="col-lg-6 col-12 d-flex align-items-center">
                    <LogoFlotante />    
                    <div className="content-card">
                        <Link to="/login" className=''>Atrás</Link>
                        <h1 className="mb-5">Recupera tu cuenta</h1>
                        <p>Podemos ayudarte a restablecer tu cuenta. Te enviaremos un<br/> correo electrónico para restablecer tu contraseña.</p>
                        <form className="form-login">
                            <div className="mb-3">                                
                                <input type="text" className="form-control input-generic-green" placeholder="Introduce tu correo electrónico"></input>                                
                            </div>
                            <button type="submit" className="btn btn-generic-green px-4 py-2">Enviar</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-12 bg-fondo-relleno bg-cover"></div>
            </div>            
        </div>
    );
}
 
export default ResetPassword;