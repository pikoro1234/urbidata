import React, { useState } from "react";
import Login from "./Login";

const Precarga = () => {

    const [cambioPantalla, setCambioPantalla] = useState(false)

    const move = () =>{

        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, 10);
        function frame(){
            if (width >= 100) {
                clearInterval(id);
                setCambioPantalla(true)                
            } else {
                width++; 
                elem.style.width = width + '%'; 
            }
        }
    }

    React.useEffect( () =>{
        move()
    },[])

    return(!cambioPantalla) ?          
    <div className="content-portada d-flex align-items-center justify-content-center bg-green-dark vh-100 vw-100">
        <div className="content-center">                
            <div className="box-image">
                <img src="https://www.urbidermis.com/wp-content/uploads/urbidemis_logo_white.svg" alt="" width="350" height="350"></img>
            </div>
            <div id="myProgress">
                <div id="myBar"></div>
            </div>
        </div>                        
    </div> : <Login />
}
export default Precarga;