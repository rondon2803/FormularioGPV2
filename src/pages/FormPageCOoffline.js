import React, {useState} from 'react';
import axios from 'axios';
import imagenCentral from '../images/esperanza.jpg'
import '../App.css';
import '../estilos.css';
import gp from '../images/greenpeace-green.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from '../componentes/ComponenteInput';
import Dropdown from '../componentes/ComponenteDropdown';
import { MensajeError } from '../elementos/Formularios';
import { tiposDocumentos } from '../datos/data';

export const FormPageCOoffline = () => {



    const[nombre, cambiarNombre] =useState({campo:"", valido: null});
    const[apellido, cambiarApellido] =useState({campo:"", valido: null});
    const[dni, cambiarDNI] =useState({campo:"", valido: null});
    const[telefono, cambiarTelefono] =useState({campo:"", valido: null});
    const[codigoArea, cambiarCodigoArea] = useState({campo:"", valido: null});
    const[ciudad,cambiarCiudad] = useState({campo:"", valido: null});
    const[email, cambiarEmail] =useState({campo:"", valido: null});
    // const[pais, cambiarPais] = useState({campo: '', valido: null, descriptivo: 'pais' });
    const[tipoDocumento, cambiarTipoDocumento] = useState({campo:"Cedula", valido: null, descriptivo: 'tipoDocumento'});
    const[captador, cambiarCaptador] = useState({campo: 'voluntario', valido: null, descriptivo: 'captador' });
    // const[terminos, cambiarTerminos] = useState(true);
    const[terminos, cambiarTerminos] = useState(true);
    const[formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{5,14}$/, // 7 a 14 numeros.
        caracteristicaTelefono: /^\d{2,6}$/, // 7 a 14 numeros.
        dni: /^\d{6,10}$/, // 7 a 8 numeros.
        email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
        direccion: /^[a-zA-ZÀ-ÿ\s0-9_-]{4,40}$/,
        cp: /^[a-zA-ZÀ-ÿ\s0-9_-]{3,12}$/,
        tarjetaCredito: /^\d{12,16}$/, 
        titularTarjeta: /^[a-zA-ZÀ-ÿ\s]{4,40}$/ // Letras y espacios, pueden llevar acentos.
    }


    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        //console.log(evt);

        if (
        nombre.valido === 'true' &&
        apellido.valido === 'true' &&
        tipoDocumento.valido === 'true' &&
        dni.valido === 'true' &&
        codigoArea.valido === 'true' &&
        telefono.valido === 'true' &&
        ciudad.valido === 'true' &&
        email.valido === 'true' 

        )
        {
            saveData();    
            cambiarNombre({campo: '', valido: null});
            cambiarApellido({campo: '', valido: null});
            cambiarTipoDocumento({campo: 'Cedula', valido: null, descriptivo: 'tipoDocumento' });
            cambiarDNI({campo: '', valido: null});
            cambiarCodigoArea({campo: '', valido: null});
            cambiarTelefono({campo: '', valido: null});
            cambiarCiudad({campo: '', valido: null});
            cambiarEmail({campo: '', valido: null});
            cambiarCaptador({campo: 'voluntario', valido: null, descriptivo: 'captador'});
            cambiarTerminos(true)

            cambiarFormularioValido(true);


        }

        else{
        cambiarFormularioValido(false);
        }

    }

    const saveData = () => {


        // Crear un objeto con los datos
        const nuevoDato = { firstName: nombre.campo, lastName: apellido.campo, docType: tipoDocumento.campo, docNumber: dni.campo,
            areaCode: codigoArea.campo, phoneNumber: telefono.campo,  city: ciudad.campo, email: email.campo, 
            captador: captador.campo, form_id : 11
        };

        // Leer los datos existentes de localStorage
        const datosExistentes = JSON.parse(localStorage.getItem('datosFormulario')) || [];

        // Agregar el nuevo dato a los datos existentes
        datosExistentes.push(nuevoDato);

        // Guardar los datos actualizados en localStorage
        localStorage.setItem('datosFormulario', JSON.stringify(datosExistentes));

    }

    const descargarDatos = () => { 
        
        const datos = localStorage.getItem('datosFormulario');
        if (!datos) {
            alert('No hay datos para descargar.');
            return;
        }

        // Crear un Blob con los datos
        const blob = new Blob([datos], {type: 'application/json'});
        alert('Se van a descargar todos los datos almacenados');

        // Crear un enlace para descargar el Blob
        const url = URL.createObjectURL(blob);
        const enlace = document.createElement('a');
        enlace.href = url;
        enlace.download = 'datosFormulario.json';

        // Simular un clic en el enlace para descargar el archivo
        document.body.appendChild(enlace);
        enlace.click();

        // Limpiar y remover el enlace
        document.body.removeChild(enlace);
        URL.revokeObjectURL(url);
        
    }

    function cargaArchivos(data){
        let i = 0;
        data.forEach(objeto => {
        //    console.log(objeto.firstName);
        //    console.log(objeto.lastName);
        //    console.log(objeto.docType);
        //    console.log(objeto.docNumber);
        //    console.log(objeto.areaCode);
        //    console.log(objeto.phoneNumber);
        //    console.log(objeto.city);
        //    console.log(objeto.email);
        //    console.log(objeto.captador);
         //   console.log("formid: 11");
            i++;
            axios.post('https://backoffice.infogreenpeace.org/api/forms/save',{
                firstName: objeto.firstName,
                lastName: objeto.lastName,
                docType: objeto.docType,
                docNumber: objeto.docNumber,
                areaCode: objeto.areaCode,
                phoneNumber: objeto.phoneNumber,
                city: objeto.city,
                email: objeto.email,
                captador: objeto.captador,
                form_id :  11
            })
            .then(function (response) {
            console.log(response);
            //ACA LIMPIO EL ALMACENAMIENTO EN EL NAVEGADOR SI TODO VA BIEN
            localStorage.clear();
            })
            .catch(function (error) {
            console.log(error);
            alert("Error ! No se pudieron enviar los datos");
            });

        })
        alert('Se enviaron a la base de datos ' + i + " archivos" );
        
    };
    

    function obtenerTodos() {
        const datos = {}; // Objeto para almacenar los pares clave-valor
        
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            const valor = localStorage.getItem(clave);
            const valoractualizado = JSON.parse(valor);
            cargaArchivos(valoractualizado);
        }


        //console.log(datos);
        return datos;
    }

    return (
        <>
        
        <nav className="navbar "> 

            <div className="navbar-header">
              <div className="caja">
              <img alt="GREENPEACE" className="greenpeace" src={gp}/>
              </div>

            </div>
        </nav>

        <body className="bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-6">
                <h1 className="text-5xl font-bold text-green-500 mb-2">GREENPEACE</h1>
                <p className="text-3xl text-red-600 font-semibold">¡SÚMATE AHORA, CONTIGO SOMOS MÁS!</p>
                </div>
                <button onClick={descargarDatos}  id="descargarDatos" className='descargarDatos'>Descargar Datos</button>
                

                <img src={imagenCentral} alt='Greenpeace' className='imagenPrincipal'></img>
                <button onClick={obtenerTodos}  id="subirDatos" className='subirDatos'>Subir Datos</button>
                <div className="mb-4"></div>
            {/* </div> */}
            <div className="mb-4">
                {/* aca le hago el marco */}
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form action='' onSubmit={onSubmit}>
                        <div className="mb-4 md:flex md:items-center">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <ComponenteInput
                                estado={nombre}
                                cambiarEstado={cambiarNombre}
                                tipo="texto"
                                label="Nombre" 
                                placeholder="Ej. Daniela"
                                name="nombre"
                                leyendaError="Campo Incorrecto"
                                expresionRegular={expresiones.nombre}
                                
                                >
                                </ComponenteInput>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <ComponenteInput
                                estado={apellido}
                                cambiarEstado={cambiarApellido}
                                tipo="texto"
                                label="Apellido" 
                                placeholder="Ej. Rondon"
                                name="apellido"
                                leyendaError="Campo Incorrecto"
                                expresionRegular={expresiones.nombre}
                                
                                >
                                </ComponenteInput>
                            </div>
                        </div>

                        <div className="mb-4 md:flex md:items-center">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">

                                <Dropdown
                                label="Tipo de documento"
                                data={tiposDocumentos}
                                estado={tipoDocumento}
                                descriptivo="tipoDocumento"
                                cambiarEstado={cambiarTipoDocumento}
                                leyendaError="Campo Obligatorio"
                                name="tipoDocumento"
                                id="tipoDocumento"
                                ></Dropdown>

                            </div>
                            <div className="md:w-1/2 px-3">
                                <ComponenteInput
                                estado={dni}
                                cambiarEstado={cambiarDNI}
                                tipo="texto"
                                label="Número de Documento" 
                                placeholder="Ej. 21516010"
                                name="dni"
                                leyendaError="El documento solo pueden ser numeros"
                                expresionRegular={expresiones.dni}
                                
                                >
                                </ComponenteInput>
                            </div>
                        </div>


                        <div className="mb-4 md:flex md:items-center">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <ComponenteInput 
                                estado={codigoArea}
                                cambiarEstado={cambiarCodigoArea}
                                tipo="text"
                                label="Cód área" 
                                placeholder="Ej. 647"
                                name="codigo"
                                leyendaError="Campo incorrecto"
                                expresionRegular={expresiones.caracteristicaTelefono}
                                >
                                </ComponenteInput>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <ComponenteInput 
                                estado={telefono}
                                cambiarEstado={cambiarTelefono}
                                tipo="text"
                                label="Número telefónico" 
                                placeholder="Ej. 41256847"
                                name="celular"
                                leyendaError="Campo incorrecto"
                                expresionRegular={expresiones.telefono}
                                > 
                                </ComponenteInput>
                            </div>
                        </div>



                        <div className="mb-4 md:flex md:items-center">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <ComponenteInput 
                                estado={ciudad}
                                cambiarEstado={cambiarCiudad}
                                tipo="text"
                                label="Ciudad" 
                                placeholder="Ej. Bogotá"
                                name="ciudad"
                                leyendaError="Campo incorrecto"
                                expresionRegular={expresiones.nombre}
                                > 
                                </ComponenteInput>
                            </div>
                            <div className="md:w-1/2 px-3">
                            <ComponenteInput 
                            estado={email}
                            cambiarEstado={cambiarEmail}
                            tipo="email"
                            label="Correo electrónico" 
                            placeholder="Ej. daniela.rondon@email.com"
                            name="mail"
                            leyendaError="Campo incorrecto"
                            expresionRegular={expresiones.correo}
                            > 
                            </ComponenteInput>
                            </div>
                        </div>


                        {/* <Dropdown
                                label="Captador"
                                data={captadores}
                                estado={captador}
                                descriptivo="captador"
                                cambiarEstado={cambiarCaptador}
                                leyendaError="Campo Obligatorio"
                                name="captador"
                                id="captador"
                        ></Dropdown> */}
                        
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input className="checkbox mr-2 leading-tight" type="checkbox" id="terms" checked ={terminos} onChange={onChangeTerminos}></input>
                                <label className="text-sm checkbox-label" htmlFor="terms">
                                    Al presionar Enviar estaría aceptando nuestros Términos y Condiciones.
                                </label>
                                {formularioValido === false && <MensajeError>
                                <p className='fondoError'>
                                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                                <b>Error: </b>
                                Por favor rellena el formulario correctamente.
                                </p>
                                </MensajeError>
                                }
                            </div>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Enviar
                            </button>
                        </div>


                                
               


                </form>
                </div>
            </div>
            </div>

            <div>
                <footer>
                <div className='FooterBar'>
                    <p>Greenpeace Argentina 2023 | A menos que se indique lo contrario, la copia del sitio web está autorizada bajo una licencia internacional CC-BY</p>
                </div>
                
                </footer>
            </div>


        </body>



        </>
    )
}