import { Link } from "react-router-dom";
import LogoFlotante from "../Components/LogoFlotante";

const Login = () => {
    return ( 
        <div className="bg-green-dark container-fluid vw-100">
            <div className="row vh-100">
                <div className="col-lg-6 col-12 d-flex align-items-center">
                    <LogoFlotante />
                    <div className="content-card">
                        <h1 className="mb-5">LOGIN</h1>
                        <form className="form-login">
                            <div className="mb-3">                                
                                <input type="email" className="form-control input-generic-green" id="exampleInputEmail1" placeholder="usuario"></input>                                
                            </div>
                            <div className="mb-3">                                
                                <input type="password" className="form-control input-generic-green" id="exampleInputPassword1" placeholder="password"></input>
                            </div>
                            <div className="mb-3"> 
                                <Link to="/reset-password" className=''>Recuperar Contraseña</Link>
                            </div>
                            <button type="submit" className="btn btn-generic-green px-4 py-2">Login</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-12 bg-fondo-relleno bg-cover"></div>
            </div>            
        </div>
    );
}
 
export default Login;