import Navbar from "../Components/Navbar";

const CrearPerfiles = () => {
    return ( 
        <>
            <Navbar />
            <div className="container-fluid h-100">                
                <div className="d-flex align-items-start py-4">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className="btn-flotante-crear-users mb-5 mt-2">
                            <span className="btn-formulario-crear-users">Guardar y salir</span>
                        </div>                        
                        <button className="nav-link text-start ps-0 btn-tabs-generic active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">01 / Tipo de perfil</button>
                        <button className="nav-link text-start ps-0 btn-tabs-generic" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">02 / Información sobre el perfil</button>
                        <div className="d-flex align-items-start ps-4">
                            <div className="nav flex-column nav-pills me-3" id="v-pills-tab-second" role="tablist" aria-orientation="vertical">                    
                                <button className="nav-link text-start ps-0 btn-tabs-generic" id="v-pills-home-second-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home-second" type="button" role="tab" aria-controls="v-pills-home-second" aria-selected="true">Nombre</button>
                                <button className="nav-link text-start ps-0 btn-tabs-generic" id="v-pills-profile-second-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile-second" type="button" role="tab" aria-controls="v-pills-profile-second" aria-selected="false">Dirección</button>
                                <button className="nav-link text-start ps-0 btn-tabs-generic" id="v-pills-messages-second-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages-second" type="button" role="tab" aria-controls="v-pills-messages-second" aria-selected="false">Datos de contacto</button>
                                <button className="nav-link text-start ps-0 btn-tabs-generic" id="v-pills-settings-second-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings-second" type="button" role="tab" aria-controls="v-pills-settings-second" aria-selected="false">Settings</button>
                            </div>
                        </div>
                        <button className="nav-link text-start ps-0 btn-tabs-generic" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">03 / Asignar jardineras</button>
                        <button className="nav-link text-start ps-0 btn-tabs-generic" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                    </div>
                    <div className="tab-content w-100" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div className="content-datos-formulario-pasos">
                                <div className="content-uno">1</div>
                                <div className="content-dos">¿Qué tipo de perfil quieres crear?</div>
                                <div className="content-tres">
                                    <div className="pasos-tipo-usuario">
                                        <div className="box">
                                            <p className="titulo">Empresa</p>
                                            <p className="texto">Un perfil de empresa es únicamente descriptivo,<br></br> no puede ejercer ninguna función. Se le pueden<br></br> asignar administradores, usuarios y jardineras.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-cuatro">
                                    <div className="btn-siguiente-paso">Siguiente</div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">                        
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade" id="v-pills-home-second" role="tabpanel" aria-labelledby="v-pills-home-second-tab">content nombre</div>
                                <div className="tab-pane fade" id="v-pills-profile-second" role="tabpanel" aria-labelledby="v-pills-profile-second-tab">content direccion</div>
                                <div className="tab-pane fade" id="v-pills-messages-second" role="tabpanel" aria-labelledby="v-pills-messages-second-tab">content datos de contacto</div>
                                <div className="tab-pane fade" id="v-pills-settings-second" role="tabpanel" aria-labelledby="v-pills-settings-second-tab">4</div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">3</div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">4</div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CrearPerfiles;