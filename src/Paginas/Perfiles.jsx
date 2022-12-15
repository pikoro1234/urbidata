import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import TablaDatatable from "../Components/TablaDatatable";

const data = [
    {
        id : 1,
        nombre : 'jorge1',
        apellidos : 'fiorilo cardenas'
    },
    {
        id : 2,
        nombre : 'jorge2',
        apellidos : 'fiorilo cardenas'
    },
    {
        id : 3,
        nombre : 'jorge3',
        apellidos : 'fiorilo cardenas'
    },
    {
        id : 4,
        nombre : 'jorge4',
        apellidos : 'fiorilo cardenas'
    }
]

const dataDos = [
    {
        id : 1,
        nombre : 'Fiorilo2',
        apellidos : 'fiorilo cardenas'
    },
    {
        id : 2,
        nombre : 'Fiorilo2.1',
        apellidos : 'fiorilo cardenas'
    },
    {
        id : 3,
        nombre : 'Fiorilo2.2',
        apellidos : 'fiorilo cardenas'
    },
    {
        id : 4,
        nombre : 'Fiorilo2.3',
        apellidos : 'fiorilo cardenas'
    }
]

const dataTres = [
    {
        id : 1,
        nombre : 'Fiorilo3',
        apellidos : 'fiorilo cardenas'
    },
    {
        id : 2,
        nombre : 'Fiorilo3.1',
        apellidos : 'fiorilo cardenas'
    },
    {
        id : 3,
        nombre : 'Fiorilo3.2',
        apellidos : 'fiorilo cardenas'
    },
    {
        id : 4,
        nombre : 'Fiorilo3.3',
        apellidos : 'fiorilo cardenas'
    }
]

const Perfiles = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid"> 

                <div className="content d-flex justify-content-between align-items-center py-3">

                    <ul className="nav nav-tabs border-0" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link btn-tabs-generic active" id="primera-tab" data-bs-toggle="tab" data-bs-target="#primera" type="button" role="tab" aria-controls="primera" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link btn-tabs-generic" id="segunda-tab" data-bs-toggle="tab" data-bs-target="#segunda" type="button" role="tab" aria-controls="segunda" aria-selected="false">Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link btn-tabs-generic" id="tercera-tab" data-bs-toggle="tab" data-bs-target="#tercera" type="button" role="tab" aria-controls="tercera" aria-selected="false">Contact</button>
                        </li>
                    </ul>

                    <div className="content-btn-actions d-flex align-items-center justify-content-center">
                        <button className="btn-standar bg-primary color-green">M</button>
                        <Link to="/portada-crear" className="btn-standar border-0 color-primary bg-green-dark ms-2 text-decoration-none">Crear perfil nuevo</Link>
                    </div>

                </div>           

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="primera" role="tabpanel" aria-labelledby="primera-tab">
                        <TablaDatatable data={data} />
                    </div>
                    <div className="tab-pane fade" id="segunda" role="tabpanel" aria-labelledby="segunda-tab">
                        <TablaDatatable data={dataDos}/>
                    </div>
                    <div className="tab-pane fade" id="tercera" role="tabpanel" aria-labelledby="tercera-tab">
                        <TablaDatatable data={dataTres}/>
                    </div>
                </div>                
            </div>
        </> 
     );
}
 
export default Perfiles;