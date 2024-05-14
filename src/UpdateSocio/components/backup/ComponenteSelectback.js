import React from 'react';
import {Select, Formulario, GrupoInput, Input, LeyendaError, IconoValidacion, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { faCheck, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const ComponenteSelect = ({estado, cambiarEstado, type, placeholder, name, id, leyendaError, expresionRegular})  => {

    
    const constructor = (props) => {
      estado = {value: 'Genero *'};
  
      handleChange = this.handleChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    const handleChange = (event) => {
      console.log(event.target.value);
      cambiarEstado({...estado, campo: event.target.value});
      //this.setState({value: event.target.value});
    }
  /*
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  */

    const validacion = (event) => {
        if(event.target.value === "Genero"){
          
            console.log("Input incorrecto");
            cambiarEstado({...estado, valido: 'false'});
            console.log(estado.valido);
        }
          else {
            console.log("Input correcto");
            cambiarEstado({...estado, valido: 'true'});
            console.log(estado.valido);
           
          }
        }
        
      return (
        
        <div>
            <GrupoInput>
                <Select
                    name={name}
                    id={id} 
                    value={estado.campo} 
                    onChange={handleChange}
                    onBlur={validacion}
                    valido={estado.valido}
                    
                    >
                    <option value="Genero">Genero *</option>
                    <option value="femenino">Femenino</option>
                    <option value="masculino">Masculino</option>
                    <option value="otro">Otro</option>
                    
                    
                    

                </Select>

                <IconoValidacion 
                        icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                        valido={estado.valido}
                    />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
      );
}
  

  
export default ComponenteSelect;