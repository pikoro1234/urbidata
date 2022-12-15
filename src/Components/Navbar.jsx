import React from 'react';
import { NavLink, Link } from "react-router-dom";
import ImgLogo from '../imagenes/logo_urbidata.png'


const cambioTamanhoMenu = () =>{

    let menuFlotante = document.querySelector('.content-dinamic-submenu')

    let btnFlotante = document.querySelector('.span-margin')

    menuFlotante.classList.toggle('ocultar-icon')

    btnFlotante.classList.toggle('margin-negativo-dinamic-submenu-span')
}

const Navbar = () => {
    return ( 

        <header id="header" className="App-header container-fluid border-bottom-complet">
            <div className="d-flex align-items-center justify-content-between">

                <nav className="d-flex align-items-center">
                    <NavLink to="/urbidata" className="nav-link btn-generic me-2" aria-current="page">Localización</NavLink>
                    <NavLink to="/Analisis" className="nav-link btn-generic me-2" aria-current="page">Análisis</NavLink>                    
                    <NavLink to="/Avisos" className="nav-link btn-generic" aria-current="page">Avisos <i className='ms-1' data-feather="bell"></i> </NavLink>
                </nav>
                
                <div className="content-logo"><Link to="/"><img src={ImgLogo} alt="logo principal" className="logo"></img></Link></div>

                <div className="content-cerrar-session position-relative">

                    <button onClick={() => cambioTamanhoMenu()} className="btn-generic py-2 px-3 btn-menu-flotante btn-floting-nav btn-desple-menu-flotante">
                        <span className='span-margin'>N</span>
                        <ul className='content-dinamic-submenu list-unstyled ocultar-icon'>
                            <li className='mb-2 mt-2'><Link to="/perfiles" className='d-flex align-items-center justify-content-start btn-enlace-style-none'>Gestionar perfiles</Link></li>
                            <li className='mb-2'><Link to="/mi-cuenta" className='d-flex align-items-center justify-content-start btn-enlace-style-none'>Cuenta</Link></li>
                            <li className='mb-2'><Link to="/servicio-tecnico" className='d-flex align-items-center justify-content-start btn-enlace-style-none'>Servicio técnico</Link></li>
                            <li className='d-flex align-items-center justify-content-start'><span className='btn-enlace-style-none'>Cerrar sesión</span></li>
                        </ul>
                    </button>

                </div>

            </div>
        </header>
    );
}
 
export default Navbar;