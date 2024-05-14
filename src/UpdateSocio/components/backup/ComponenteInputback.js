import React from 'react';
import {Formulario, GrupoInput, Input, LeyendaError, IconoValidacion, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { faCheck, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({estado, cambiarEstado, type, placeholder, name, id, leyendaError, expresionRegular}) => {

  const onChange = (evt) => {
    //console.log(evt.target.value);
    cambiarEstado({...estado, campo: evt.target.value});
  }

  const validacion = () => {
    if(expresionRegular){
      if(expresionRegular.test(estado.campo)){
        //console.log("Input correcto");
        cambiarEstado({...estado, valido: 'true'});
        console.log(estado.valido);
      }
      else {
        //console.log("Input incorrecto");
        cambiarEstado({...estado, valido: 'false'});
        console.log(estado.valido);
      }
    }
  }
    return (
        <div>
            <GrupoInput>
              <Input 
                placeholder={placeholder} 
                type={type} 
                name={name} 
                id={id}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
                
                
                
            />
				<IconoValidacion 
					icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
					valido={estado.valido}
				/>
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    );

}

export default ComponenteInput;