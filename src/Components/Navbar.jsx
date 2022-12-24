import React from 'react';
import { NavLink, Link } from "react-router-dom";
import ImgLogo from '../imagenes/logo_urbidata.png'
import BotonNavbarDinamic from './BotonNavbarDinamic';

const Navbar = () => {

    let propsEnlaces = [
        {
            'text' : 'Gestionar perfiles',
            'enlace': '/perfiles',
            'classExtra' : 'mb-2 mt-2',
        },
        {
            'text' : 'Cuenta',
            'enlace': '/mi-cuenta',
            'classExtra' : 'mb-2 mt-2',
        },
        {
            'text' : 'Servicio técnico',
            'enlace': '/servicio-tecnico',
            'classExtra' : 'mb-2 mt-2',
        },
        {
            'text' : 'Cerrar sesión',
            'enlace': '',
            'classExtra' : 'mb-2 mt-2 btn-cerrar-session',
        },
    ]

    return ( 

        <header id="header" className="App-header container-fluid border-bottom-complet">
            <div className="d-flex align-items-center justify-content-between">
                <nav className="d-flex align-items-center">
                    <NavLink to="/urbidata" className="nav-link btn-generic me-2" aria-current="page">Localización</NavLink>
                    <NavLink to="/analisis" className="nav-link btn-generic me-2" aria-current="page">Análisis</NavLink>                    
                    <NavLink to="/avisos" className="nav-link btn-generic" aria-current="page">Avisos <i className='ms-1' data-feather="bell"></i> </NavLink>
                </nav> 
                
                <div className="content-logo"><Link to="/"><img src={ImgLogo} alt="logo principal" className="logo"></img></Link></div>

                <div className="content-cerrar-session position-relative">                    
                    <BotonNavbarDinamic props={propsEnlaces} />
                </div>                
            </div>
        </header>
    );
}
 
export default Navbar;