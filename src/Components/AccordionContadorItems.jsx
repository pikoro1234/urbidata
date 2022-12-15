const AccordionContadorItems = (props) => {
    return ( 

        <div className="contador-jardineras d-flex align-items-center justify-content-between py-2 container-fluid">
            <div className="span-size-jardineras">{props.cantidad} {props.textCantidad}</div>
                <div><span>!!</span></div>
            <div></div>
        </div>
    );
}
 
export default AccordionContadorItems;