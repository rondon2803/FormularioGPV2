import React from 'react';
import {GrupoInput, Input, LeyendaError, IconoValidacion,TextoFormu} from './elementos/Formularios';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({estado, cambiarEstado, type, placeholder, name, id, leyendaError, expresionRegular, texto}) => {

  const onChange = (evt) => {
    //console.log(evt.target.value);
    cambiarEstado({...estado, campo: evt.target.value});
  }

  const validacion = () => {
    if(expresionRegular){
      if(expresionRegular.test(estado.campo)){
        //console.log("Input correcto");
        cambiarEstado({...estado, valido: 'true'});
        //console.log(estado.valido);
      }
      else {
        //console.log("Input incorrecto");
        cambiarEstado({...estado, valido: 'false'});
        //console.log(estado.valido);
      }
    }
  }
    return (
        <div>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
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
        <TextoFormu >{texto}</TextoFormu>
            </GrupoInput>
            
        </div>
    );

}

export default ComponenteInput;