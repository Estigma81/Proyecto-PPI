import React from 'react';
import '../../styles/cardsNoregistrados.css';
import inteligencia from '../../images/1Carrusel.png'
import objetivo from '../../images/2Carrusel.png'
import quienes from '../../images/3Carrusel.png'

class Carrusel extends React.Component{
    render (){
        return (
            <div className="container  btext">
            <div className=" mt-5">
              <h1 className="colorTextAzul text-center" id="titulo">
                Bienvenido a Bonhomía
              </h1>
            </div>
            <div className="row">
              <div className="col-6 contenedor">
                <img
                  className="img-fluid imagen shadow-lg p-3 mb-3 mt-3 rounded"
                  src={quienes}
                  alt=""
                />
              </div>
              <div className="col-6 contenedor">
                <img
                  className="img-fluid imagen shadow-lg p-3 mb-3 mt-3 rounded"
                  src={objetivo}
                  alt=""
                />
              </div>
              <div className="col-6 contenedor" className="cardQuienes">
                <img
                  className="img-fluid imagen shadow-lg p-3 mb-3 mt-3 rounded" 
                  src={inteligencia}
                  alt=""
                />
              </div>
            </div>
      
           </div>
        )
    }
     
}
export default Carrusel;
