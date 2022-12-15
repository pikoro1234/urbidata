import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Precarga from './Precarga';
import ResetPassword from './ResetPassword';
import Home from './Home';
import Analisis from './Analisis';
import Avisos from './Avisos';
import MiCuenta from './MiCuenta';
import Perfiles from './Perfiles';
import ServicioTecnico from './ServicioTecnico';
import PortadaCrearPerfil from './PortadaCrearPerfil';
import CrearPerfiles from './CrearPerfiles';


function App() {

  let auth = true

  return ( 
    <>      
      <Router> 

        {/* {(auth) &&  <Navbar />} */}

        <Routes>
          {/* rutas de precarga, login, reset password */}
          <Route path="/login" element={(auth) ? <Home /> : <Precarga />}></Route>          
          <Route path="/reset-password" element={(auth) ? <Home /> : <ResetPassword />}></Route>          

          <Route path="/crear-perfiles" element={(auth) ? <CrearPerfiles /> : <Precarga />}></Route>
          <Route path="/servicio-tecnico" element={(auth) ? <ServicioTecnico /> : <Precarga />}></Route>
          <Route path="/portada-crear" element={(auth) ? <PortadaCrearPerfil /> : <Precarga />}></Route>
          <Route path="/perfiles" element={(auth) ? <Perfiles /> : <Precarga />}></Route>
          <Route path="/mi-cuenta" element={(auth) ? <MiCuenta /> : <Precarga />}></Route>
          <Route path="/avisos" element={(auth) ? <Avisos /> : <Precarga />}></Route>          
          <Route path="/analisis" element={(auth) ? <Analisis /> : <Precarga />}></Route>
          <Route path="/urbidata" element={(auth) ? <Home /> : <Precarga />}></Route>
        </Routes>

      </Router>        
    </>   
  );
}

export default App;