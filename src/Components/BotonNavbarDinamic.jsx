import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleButtonMenu = styled.button`
width: ${ props => 50 }px;`

const cambioTamanhoMenu = (tipoButton) => {
        
    if (tipoButton === 'navBar') {        
        let menuFlotante = document.querySelector('.ulContentNavbar')
        let btnElement = document.querySelector('.content-cerrar-session .btn-desple-menu-flotante')
        let btnFlotante = document.querySelector('.spanNavbar')        
        menuFlotante.classList.contains('ocultar-icon') ? menuFlotante.classList.remove('ocultar-icon') : menuFlotante.classList.add('ocultar-icon')
        btnElement.classList.contains('menu-desplegado-navbar') ? btnElement.classList.remove('menu-desplegado-navbar') : btnElement.classList.add('menu-desplegado-navbar')
        btnFlotante.classList.contains('margin-negativo-dinamic-submenu-span') ? btnFlotante.classList.remove('margin-negativo-dinamic-submenu-span') : btnFlotante.classList.add('margin-negativo-dinamic-submenu-span')        

        menuFlotante.classList.contains('ocultar-icon') ? document.getElementById('root').classList.remove('abrimos-menu') : document.getElementById('root').classList.add('abrimos-menu')

        setTimeout(() => {
            if (btnElement.classList.contains('menu-desplegado-navbar')) {
                menuFlotante.classList.add('ocultar-icon') 
                btnElement.classList.remove('menu-desplegado-navbar')
                btnFlotante.classList.remove('margin-negativo-dinamic-submenu-span')   
            } 
        }, 10000);
    }

    if (tipoButton === 'filtros') {
        let menuFlotante = document.querySelector('.ulContentOrdenar')
        let btnElement = document.querySelector('.content-ordenar .btn-desple-menu-flotante')
        let btnFlotante = document.querySelector('.spanOrdenar')         
        menuFlotante.classList.contains('ocultar-icon') ? menuFlotante.classList.remove('ocultar-icon') : menuFlotante.classList.add('ocultar-icon')
        btnElement.classList.contains('menu-desplegado-ordenar') ? btnElement.classList.remove('menu-desplegado-ordenar') : btnElement.classList.add('menu-desplegado-ordenar')
        btnFlotante.classList.contains('margin-negativo-dinamic-ordenar-span') ? btnFlotante.classList.remove('margin-negativo-dinamic-ordenar-span') : btnFlotante.classList.add('margin-negativo-dinamic-ordenar-span')

        menuFlotante.classList.contains('ocultar-icon') ? document.getElementById('root').classList.remove('abrimos-menu') : document.getElementById('root').classList.add('abrimos-menu')

        setTimeout(() => {
            if (btnElement.classList.contains('menu-desplegado-ordenar')) {
                menuFlotante.classList.add('ocultar-icon')
                btnElement.classList.remove('menu-desplegado-ordenar')
                btnFlotante.classList.remove('margin-negativo-dinamic-ordenar-span')
            } 
        }, 10000);
    }    
}

const BotonNavbarDinamic = (props) => {
    
    return (         
        <StyleButtonMenu valueWidth={props.valorGrafico} onClick={() => cambioTamanhoMenu(props.tipoButton)} className="btn-generic py-2 px-3 btn-desple-menu-flotante">
            <span className={props.spanType}>{props.textBtn}</span>
            <ul className={props.ulType}>
                {
                    props.props.map((item, key) => ( 
                        item.enlace !== '' ?
                        <li className={item.classExtra} key={key}><Link to={item.enlace !== '' ? item.enlace : '/'} className='d-flex align-items-center justify-content-start btn-enlace-style-none'>{item.text}</Link></li> :
                        <li className={item.classExtra} key={key}><span className='d-flex align-items-center justify-content-start btn-enlace-style-none'>{item.text}</span></li>
                    ))
                }                        
            </ul>
        </StyleButtonMenu>        
    );
}
 
export default BotonNavbarDinamic;