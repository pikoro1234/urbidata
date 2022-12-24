import { Link } from "react-router-dom";

const cambioTamanhoMenu = () => {

    let menuFlotante = document.querySelector('.content-dinamic-submenu')

    let btnFlotante = document.querySelector('.span-margin')

    menuFlotante.classList.toggle('ocultar-icon')

    btnFlotante.classList.toggle('margin-negativo-dinamic-submenu-span')
}

const BotonNavbarDinamic = (props) => {

    console.log(props)
    return ( 
        <>
            <button onClick={() => cambioTamanhoMenu()} className="btn-generic py-2 px-3 btn-menu-flotante btn-floting-nav btn-desple-menu-flotante">
                <span className='span-margin'>N</span>
                <ul className='content-dinamic-submenu list-unstyled ocultar-icon'>
                    {
                        props.props.map((item, key) => ( 
                            <li className={item.classExtra} key={key}><Link to={item.enlace !== '' ? item.enlace : '/'} className='d-flex align-items-center justify-content-start btn-enlace-style-none'>{item.text}</Link></li>                    
                        ))
                    }                        
                </ul>
            </button>
        </>
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


