import AccordionItem from "./AccordionItem";
import TriggerFiltros from "./TriggerFiltros";  
const Accordion = (props) => {

    return ( 
        <>
            <TriggerFiltros />  
                      
            <div className="accordion" id="accordionExample">
                { 
                    props.jardineras.map((item, key) => (                    
                        <div className="accordion-item bg-transparent acordion-box-style mt-3" key={key}> 
                            {props.accordion === "jardineras" ?
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name=""/>
                                    <button className="accordion-button bg-transparent px-2 py-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#'+item.id_jardinera} aria-expanded="false" aria-controls={item.id_jardinera}>
                                        <div className="d-flex align-items-center flex-wrap justify-content-between">
                                            <div className="top-title d-flex align-items-center">
                                                <span className="">{item.descripcion}</span><div className="separator mx-1">/</div><span className="">{item.nombre_empresa}</span><div className="separator mx-1">/</div><span className="">Sants-Montjuïc</span>
                                            </div>
                                            <div className="bottom-title d-flex align-items-center">                                         
                                                <span className="">Pyrus Calleriana Chanticleer, Alnus cordata</span><div className="separator mx-1">/</div><span className="">Último riego: <span className="fecha-acordion">2022-02-10 22:05</span></span>
                                            </div>
                                        </div>                                                              
                                    </button>
                                    <p className="mb-0">C</p>
                                </div> :
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name=""/>
                                    <button className="accordion-button bg-transparent px-2 py-1 collapsed d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target={'#'+item.id_jardinera} aria-expanded="false" aria-controls={item.id_jardinera}>
                                        <div className="">
                                            <div className="top-title d-flex align-items-center">
                                                <span className="">#{item.numero_ticket}</span><div className="separator mx-1">/</div><span className="">{item.fecha}</span>
                                            </div>
                                            <div className="bottom-title d-flex align-items-center">                                         
                                                <span className="">{item.id_jardinera}</span><div className="separator mx-1">/</div><span className="">{item.empresa}</span><div className="separator mx-1">/</div><span className="">{ item.tipo_aviso}</span>
                                            </div>
                                        </div>
                                        <p className= {item.prioridad === 'prioridad alta' ? 'color-tomato mb-0' : 'mb-0'}>{item.prioridad}</p>
                                    </button>                                    
                                </div>
                            }
                
                            <div id={item.id_jardinera} className="accordion-collapse collapse" aria-labelledby={item.id_jardinera} data-bs-parent="#accordionExample">
                                <div className="accordion-body px-3">
                                    <div className="body-accordion d-flex align-items-center justify-content-between">
                                        <table>
                                            <tbody>
                                                <AccordionItem nombre="Humedad" valorGrafico="35" valorGraficoTexto="35%" />
                                                <AccordionItem nombre="Temp. Sustrato" valorGrafico="80" valorGraficoTexto="80%" />
                                                <AccordionItem nombre="Bateria" valorGrafico="70" valorGraficoTexto="70%" />
                                                <AccordionItem nombre="Depósito" valorGrafico="50" valorGraficoTexto="Falta agua" />
                                                <AccordionItem nombre="Puerta" valorGrafico="50" valorGraficoTexto="Abierta" />
                                            </tbody>
                                        </table>
                                        <div className="box-alerts">
                                            <p className="mb-0">Hemos encontrado<br/>2 avisos relacionados<br/>con esta jardinera</p>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
 
export default Accordion;