import styled from "styled-components";

const StyleProgress = styled.div`
width: ${ props => props.valueWidth ? props.valueWidth : 0 }%;
background: ${ props => props.valueWidth <= 50 ? '#b5564a' : '#223517' }
`

const AccordionItem = (props) => {
    return ( 

        <tr>
            <td>{props.nombre}</td>
            <td>
                <div className="progress progress-width mx-3">
                <StyleProgress valueWidth={props.valorGrafico} className="progress-bar" role="progressbar" aria-valuenow={props.valorGrafico} aria-valuemin="0" aria-valuemax="100"></StyleProgress>
                </div>
            </td>
            <td>{props.valorGraficoTexto}</td>
        </tr>
    );
}
 
export default AccordionItem;