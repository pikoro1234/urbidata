import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleButtonMenu = styled.button`
width: ${ props => 50 }px;`

const cambioTamanhoMenu = (tipoButton) => {
        
    if (tipoButton === 'navBar') {        
        let menuFlotante = document.querySelector('.ulContentNavbar')
        let btnElement = document.querySelector('.content-cerrar-session .btn-desple-menu-flotante')
        let btnFlotante = document.querySelector('.spanNavbar')        
        menuFlotante.classList.toggle('ocultar-icon') 
        btnElement.classList.toggle('menu-desplegado-navbar')
        btnFlotante.classList.toggle('margin-negativo-dinamic-submenu-span')    

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
        menuFlotante.classList.toggle('ocultar-icon')
        btnElement.classList.toggle('menu-desplegado-ordenar')
        btnFlotante.classList.toggle('margin-negativo-dinamic-ordenar-span')

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




    ////// ESCONDEMOS EL CONTENEDOR DINAMIC DE FILTROS
    // $(document).mouseup(function (e){

    //     if($('.btn-desple-list-order').length > 0){

    //         let container = new Array();

    //         container.push($('.btn-desple-list-order'));
        
    //         $.each(container, function(key, value) {
    
    //             if (!$(value).is(e.target) && $(value).has(e.target).length === 0){
    
    //                 $('.listado-items-odenar').addClass('ocultar-icon')
    
    //                 $('.btn-desple-list-order').removeClass('btn-with-dinamic-size')
    //             }
    //         });
    //     }

    //     if($('.btn-desple-list-order-navbar').length > 0){

    //         let container = new Array();

    //         container.push($('.btn-desple-list-order-navbar'));
        
    //         $.each(container, function(key, value) {
    
    //             if (!$(value).is(e.target) && $(value).has(e.target).length === 0){
    
    //                 $('.listado-items-odenar-navbar').addClass('ocultar-icon')
    
    //                 $('.btn-desple-list-order-navbar').removeClass('btn-with-dinamic-size-navbar')
    //             }
    //         });
    //     }
    // });


