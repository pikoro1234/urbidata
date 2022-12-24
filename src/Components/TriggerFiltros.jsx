import BotonNavbarDinamic from './BotonNavbarDinamic';

const TriggerFiltros = () => {

    //pasamos como props los enlaces o elementos que tendra el boton
    let propsEnlaces = [
        {
            'text' : 'Por jardinera',
            'enlace': '',
            'classExtra' : 'mb-2 mt-2',
        },
        {
            'text' : 'Por cliente',
            'enlace': '',
            'classExtra' : 'mb-2 mt-2',
        },
        {
            'text' : 'Por zona',
            'enlace': '',
            'classExtra' : 'mb-2 mt-2',
        },
        {
            'text' : 'Por especie',
            'enlace': '',
            'classExtra' : 'mb-2 mt-2',
        },
        {
            'text' : 'Por último riego',
            'enlace': '',
            'classExtra' : 'mb-2 mt-2',
        },
        {
            'text' : 'Por fecha creación',
            'enlace': '',
            'classExtra' : 'mb-2 mt-2',
        },
    ]
    
    return ( 
        <div className="content-filtros d-flex align-items-center justify-content-between pt-3">
            <div className="left-content d-flex align-items-center">
                <p className="btn-config mb-0 btn-generic me-2">Configuración</p>
                <p className="btn-filtros mb-0 btn-generic">Filtros</p>
            </div>

            <div className="rigth-content d-flex align-items-center">                
                <div className="position-relative content-ordenar">
                    <BotonNavbarDinamic props={propsEnlaces} tipoButton='filtros' textBtn='C' ulType="ulContentOrdenar content-dinamic-submenu list-unstyled ocultar-icon" spanType="spanOrdenar" /> 
                </div>
                <button className="btn-invertir-ordenar py-2 px-3 btn-generic ms-2">Z-A</button>
            </div>
        </div>
    );
}
 
export default TriggerFiltros;