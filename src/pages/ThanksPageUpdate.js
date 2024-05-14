import gp from '../UpdateSocio/assets/images/greenpeace-green.svg';
import fondo from '../UpdateSocio/assets/images/bg.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import '../UpdateSocio/assets/css/AppUpdate.css';
import {CajaImagen} from '../UpdateSocio/components/elementos/Formularios.js';


export const ThanksPageUpdate = () => {


    return (
        <div className="cover-container">
            <nav className="navbar  navbar-green"> 
            <div className="container">
                <div className="navbar-header">
                <img alt="GREENPEACE" className="greenpeace" src={gp}/>
                </div>
            </div>
            
            </nav>
            

            


            {/* <div className="bg-fixed ..." style={{ backgroundImage: `url(${fondo})` }}></div> */}
            {/* <div class="bg-fixed ..." style="background-image: url(../UpdateSocio/assets/images/bg.jpg)"></div> */}
        
        {/* <CajaImagen alt="Background" className="fondo bg-fixed ..."  style="background-image" src={fondo}/> */}
        <CajaImagen alt="Background" className="fondo bg-fixed ..." style={{ backgroundImage: `url(${fondo})` }} src={fondo}/>
       
        <h1 className="text-5xl font-bold text-green-500 mb-2">¡Muchas Gracias Por Actualizarte!</h1>
        <h1 className="text-5xl font-bold text-green-500 mb-2">Nos estaremos contactando pronto</h1>
        
            
        </div>
    )
}

