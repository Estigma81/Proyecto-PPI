import React from 'react';
import PerfilAdmin from '../../images/PerfilAdmin.png';
import '../../styles/Cardperfil_Admin.css'
import '../../styles/Tipografias.css';

class Cardperfil extends React.Component {
    render() {
        return (
            <div className='container-fluid bodyperfil'>
            <div className='row'>
           
             <div className='col-sm ' className='row justify-content-center '>
                    <img src={PerfilAdmin} className="img-fluid "  className="Card-2" alt=""/>
                </div>

                 <div className="cardbodyperfil " className=" col-sm">  
                      
                            <div className="card-body cardperfil" >
                         
                                <h5 className="card-title" id="Card-title-text">Nombre:<p className="card-text">Santiago Ramírez</p></h5>
                                <h5 className="card-title" id="Card-title-text">Nickname:<p className="card-text">Estigma81</p></h5>
                                <h5 className="card-title" id="Card-title-text">Email:<p className="card-text">santiagoa@iefedericoozanam.edu</p></h5>
                                <h5 className="card-title" id="Card-title-text">Fecha de cumpleaños:<p className="card-text">28/12/2003</p></h5>
                                <h5 className="card-title" id="Card-title-text">Mascotas:<p className="card-text">Si tiene</p></h5>
                                <h5 className="card-title" id="Card-title-text">Género:<p className="card-text">Masculino</p></h5>
                                
                            </div> 

                    </div>
                    </div>
                    </div>
           
        )
    }
}
export default Cardperfil;