import React from 'react';
import { useState} from 'react';
import axios from 'axios';
import jaguar from '../UpdateSocio/assets/images/jaguar.jpg';
// import gp from '../UpdateSocio/assets/images/greenpeace-logo.png';
import gp from '../images/greenpeace-green.svg';
import mas from '../UpdateSocio/assets/images/mas.png';
import amigo from '../UpdateSocio/assets/images/amigo.png';
import '../UpdateSocio/assets/css/AppUpdate.css';
import '../UpdateSocio/assets/css/estilosUpdate.css';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, Fecha, Provincia, Phone, Columna1, Columna2, Titulo, CajaSocio, TextoFormu} from '../UpdateSocio/components/elementos/Formularios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from '../UpdateSocio/components/ComponenteInput.js';
import Dropdown from '../UpdateSocio/components/ComponenteDropdown';
import {generoData, diaData, mesData, anioData, estadocivilData, paisData, provinciaData, tarjetaData, aniovencimientoData } from '../UpdateSocio/components/datos/data.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";

export const FormPageUpdateSocio = () => {
  
    const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [apellido, cambiarApellido] = useState({campo: '', valido: null});
    const [numerosocio, cambiarNumeroSocio] = useState({campo: '', valido: null});
    const [dni, cambiarDNI] = useState({campo: '', valido: null});
    const [genero, cambiarGenero] = useState({campo: '', valido: null, descriptivo: 'Genero' });
    const [dia, cambiarDia] = useState({campo: '', valido: null, descriptivo: 'Dia' });
    const [mes, cambiarMes] = useState({campo: '', valido: null, descriptivo: 'Mes' });
    const [anio, cambiarAnio] = useState({campo: '', valido: null, descriptivo: 'Anio' });
    const [estadocivil, cambiarEstadoCivil] = useState({campo: '', valido: null, descriptivo: 'estadocivil' });
    const [pais, cambiarPais] = useState({campo: '', valido: null, descriptivo: 'pais' });
    const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
    const [localidad, cambiarLocalidad] = useState({campo: '', valido: null});
    const [provincia, cambiarProvincia] = useState({campo: '', valido: null, descriptivo: 'provincia' });
    const [codigopostal, cambiarCodigoPostal] = useState({campo: '', valido: null});
    const [email, cambiarEmail] = useState({campo: '', valido: null});
    const [emailsecundario, cambiarEmailsecundario] = useState({campo: '', valido: null});
    const [emailterciario, cambiarEmailterciario] = useState({campo: '', valido: null});
    const [codigoarea, cambiarCodigoArea] = useState({campo: '', valido: null});
    const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
    const [codsecundario, cambiarCodigoAreasecundario] = useState({campo: '', valido: null});
    const [telefonolaboral, cambiarTelefonoLaboral] = useState({campo: '', valido: null});
    const [codterciario, cambiarCodigoAreaterciario] = useState({campo: '', valido: null});
    const [celular, cambiarCelular] = useState({campo: '', valido: null});
    const [tipotarjeta, cambiarTipoTarjeta] = useState({campo: '', valido: null, descriptivo: 'tipotarjeta' });
    const [numerotarjeta, cambiarNumeroTarjeta] = useState({campo: '', valido: null});
    const [mesvencimiento, cambiarMesVencimiento] = useState({campo: '', valido: null, descriptivo: 'Mes' });
    const [aniovencimiento, cambiarAnioVencimiento] = useState({campo: '', valido: null, descriptivo: 'Anio' });
    const [dniTC, cambiarDNITC] = useState({campo: '', valido: null});
    const [titularTC, cambiarTitularTC] = useState({campo: '', valido: null});
    const [direccionpostal, cambiarDireccionPostal] = useState({campo: '', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{0,14}$/, // 7 a 14 numeros.
        caracteristicaTelefono: /^\d{0,5}$/, // 7 a 14 numeros.
        dni: /^\d{6,10}$/, // 7 a 8 numeros.
        email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
        direccion: /^[a-zA-ZÀ-ÿ\s0-9_-]{4,40}$/,
        cp: /^[a-zA-ZÀ-ÿ\s0-9_-]{3,12}$/,
        tarjetaCredito: /^\d{12,16}$/, 
        titularTarjeta: /^[a-zA-ZÀ-ÿ\s]{4,40}$/ // Letras y espacios, pueden llevar acentos.
	}

    const onSubmit = (evt) => {

        //evt.stopImmediatePropagation();
        evt.preventDefault();
        console.log(evt)
    
        if (
          nombre.valido === 'true' &&
          apellido.valido === 'true' &&
          dni.valido === 'true' &&
          genero.valido === 'true' &&
          dia.valido === 'true' &&
          mes.valido === 'true' &&
          anio.valido === 'true' &&
          estadocivil.valido === 'true' &&
          pais.valido === 'true' &&
          direccion.valido === 'true' &&
          localidad.valido === 'true' &&
          provincia.valido === 'true' &&
          codigopostal.valido === 'true' &&
          email.valido === 'true' &&
          tipotarjeta.valido === 'true' &&
          numerotarjeta.valido === 'true' &&
          mesvencimiento.valido === 'true' &&
          aniovencimiento.valido === 'true' &&
          dniTC.valido === 'true' &&
          titularTC.valido === 'true'
          )
          {
    
            axios.post('https://backoffice.greenpeace.org.ar/api/forms/save', {
              nombre: nombre.campo, //si el campo se llama igual que la clave basta con poner nombre
              apellido: apellido.campo,
              numerosocio: numerosocio.campo,
              dni: dni.campo,
              genero: genero.campo,
              dia: dia.campo,
              mes: mes.campo,
              anio: anio.campo,
              estadocivil: estadocivil.campo,
              pais: pais.campo,
              direccion: direccion.campo,
              localidad: localidad.campo,
              provincia: provincia.campo,
              codigopostal: codigopostal.campo,
              email: email.campo,
              emailsecundario: emailsecundario.campo,
              emailterciario: emailterciario.campo,
              codigoarea: codigoarea.campo,
              telefono: telefono.campo,
              codsecundario: codsecundario.campo,
              telefonolaboral: telefonolaboral.campo,
              codterciario: codterciario.campo,
              celular: celular.campo,
              tipotarjeta: tipotarjeta.campo,
              numerotarjeta: numerotarjeta.campo,
              mesvencimiento: mesvencimiento.campo,
              aniovencimiento: aniovencimiento.campo,
              dniTC: dniTC.campo,
              titularTC: titularTC.campo,
              direccionpostal: direccionpostal.campo,
              form_id :  40
    
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
    
            cambiarFormularioValido(true);
            navigate('/thanksyou');
          }
          else{
            cambiarFormularioValido(false);
          }
      }

      const navigate = useNavigate();


    return (

        <div>
        <nav className="navbar  navbar-green"> 
          <div className="container">
            <div className="navbar-header">
              <img alt="GREENPEACE" className="greenpeace" src={gp}/>
            </div>
          </div>
        </nav>




      <main >
          
        
          <Titulo>
              <img src={jaguar} className="barco" alt="¡Unite ahora!"/>
              <h1>Si ya sos donante, actualizá tus datos para que podamos seguir comunicados.</h1>

          </Titulo>
        

        <Formulario onSubmit={onSubmit} action="">
            
          <Columna1>

          <div>
            <h3 className="texto-formu">DATOS PERSONALES</h3>
            <hr></hr>
          </div>

            <ComponenteInput
                estado={nombre}
                cambiarEstado={cambiarNombre}
                type="text"
                placeholder="Nombre *"
                name="nombre"
                id="nombre"
                leyendaError="Campo Obligatorio"
                expresionRegular={expresiones.nombre}
                
            />

            <ComponenteInput
                estado={apellido}
                cambiarEstado={cambiarApellido}
                type="text"
                placeholder="Apellido *"
                name="apellido"
                id="apellido"
                leyendaError="Campo Obligatorio"
                expresionRegular={expresiones.nombre}
            />

            <ComponenteInput
                estado={numerosocio}
                cambiarEstado={cambiarNumeroSocio}
                type="text"
                placeholder="Nº de Socio"
                name="numerosocio"
                id="numerosocio"
                leyendaError="Campo Obligatorio"
                expresionRegular={expresiones.telefono}
            />

            <ComponenteInput
                estado={dni}
                cambiarEstado={cambiarDNI}
                type="text"
                placeholder="DNI / CI /LE *"
                name="dni"
                id="dni"
                leyendaError="Campo Obligatorio"
                expresionRegular={expresiones.dni}
                texto="ESCRIBÍ SOLO NUMEROS. NO INCLUIR PUNTOS"
            />
            
            <div className="espacio"></div>

            <Dropdown
              data={generoData}
              placeholder="Genero"
              descriptivo="Genero"
              //onChange={handleDropdown}
              estado={genero}
              cambiarEstado={cambiarGenero}
              leyendaError="Campo Obligatorio"
              name="genero"
              id="genero"
            />

          <div>
            
            <p className="fechas-formu">FECHA DE NACIMIENTO *:</p>
            
            
            <Fecha >
                
                <Dropdown
                  className="dia"
                  data={diaData}
                  //onChange={handleDropdown}
                  estado={dia}
                  cambiarEstado={cambiarDia}
                  leyendaError="Campo Obligatorio"
                  name="dia"
                  id="dia"
                />

                <Dropdown
                  data={mesData}
                  estado={mes}
                  cambiarEstado={cambiarMes}
                  leyendaError="Campo Obligatorio"
                  name="mes"
                  id="mes"
                />

                <Dropdown
                  data={anioData}
                  estado={anio}
                  cambiarEstado={cambiarAnio}
                  leyendaError="Campo Obligatorio"
                  name="anio"
                  id="anio"
                />
              </Fecha>
            </div>

            <Dropdown
                  data={estadocivilData}
                  estado={estadocivil}
                  cambiarEstado={cambiarEstadoCivil}
                  leyendaError="Campo Obligatorio"
                  name="estadocivil"
                  id="estadocivil"
            />

            <Dropdown
                  data={paisData}
                  estado={pais}
                  cambiarEstado={cambiarPais}
                  leyendaError="Campo Obligatorio"
                  name="pais"
                  id="pais"
            />

            <ComponenteInput
                estado={direccion}
                cambiarEstado={cambiarDireccion}
                type="text"
                placeholder="Direccion *"
                name="direccion"
                id="direccion"
                leyendaError="Campo Obligatorio"
                expresionRegular={expresiones.direccion}
            />

            <ComponenteInput
                estado={localidad}
                cambiarEstado={cambiarLocalidad}
                type="text"
                placeholder="Localidad *"
                name="localidad"
                id="localidad"
                leyendaError="Campo Obligatorio"
                expresionRegular={expresiones.direccion}
            />

          {/*Provincia y Codigo Postal un div de eso */}
          
            <Provincia>
              <Dropdown
                      data={provinciaData}
                      estado={provincia}
                      cambiarEstado={cambiarProvincia}
                      leyendaError="Campo Obligatorio"
                      name="provincia"
                      id="provincia"
                />

              <ComponenteInput
                    estado={codigopostal}
                    cambiarEstado={cambiarCodigoPostal}
                    type="text"
                    placeholder="Cód. Postal *"
                    name="codigopostal"
                    id="codigopostal"
                    leyendaError="Campo Obligatorio"
                    expresionRegular={expresiones.cp}
                />
            </Provincia>
          

          <ComponenteInput
                  estado={email}
                  cambiarEstado={cambiarEmail}
                  type="text"
                  placeholder="Email *"
                  name="email"
                  id="email"
                  leyendaError="Campo Obligatorio"
                  expresionRegular={expresiones.correo}
              />

          <ComponenteInput
                  estado={emailsecundario}
                  cambiarEstado={cambiarEmailsecundario}
                  type="text"
                  placeholder="Email 2"
                  name="emailsecundario"
                  id="emailsecundario"
                  leyendaError="Campo Obligatorio"
                  expresionRegular=""
              />

          <ComponenteInput
                  estado={emailterciario}
                  cambiarEstado={cambiarEmailterciario}
                  type="text"
                  placeholder="Email 3"
                  name="emailterciario"
                  id="emailterciario"
                  leyendaError="Campo Obligatorio"
                  expresionRegular=""
              />

          <Phone>        
              <div className="codarea">
                <ComponenteInput
                        estado={codigoarea}
                        cambiarEstado={cambiarCodigoArea}
                        type="text"
                        placeholder="Cod. Area"
                        name="codigoarea"
                        id="codigoarea"
                        leyendaError="Campo Obligatorio"
                        expresionRegular={expresiones.caracteristicaTelefono}
                        
                    />
              </div>
                <ComponenteInput
                      estado={telefono}
                      cambiarEstado={cambiarTelefono}
                      type="text"
                      placeholder="Telefono"
                      name="telefono"
                      id="telefono"
                      leyendaError="Campo Obligatorio"
                      expresionRegular={expresiones.telefono}
                      
                  />
                    
            </Phone>
            <div>
              <TextoFormu>ESCRIBÍ SOLO NUMEROS. NO AGREGUES GUIONES</TextoFormu>
            </div>

              

          <div className="espacio"></div>

          <Phone>
            <div className="numero">
              <p>0</p>
            </div>
            <ComponenteInput
                  estado={codsecundario}
                  cambiarEstado={cambiarCodigoAreasecundario}
                  type="text"
                  placeholder="Cod. Area"
                  name="codigoareasecundario"
                  id="codigoareasecundario"
                  leyendaError="Campo Obligatorio"
                  expresionRegular={expresiones.caracteristicaTelefono}
              />

            <ComponenteInput
                  estado={telefonolaboral}
                  cambiarEstado={cambiarTelefonoLaboral}
                  type="text"
                  placeholder="Laboral"
                  name="laboral"
                  id="laboral"
                  leyendaError="Campo Obligatorio"
                  expresionRegular={expresiones.telefono}
              />
            </Phone>

            <div>
              <TextoFormu>ESCRIBÍ SOLO NUMEROS. NO AGREGUES GUIONES</TextoFormu>
            </div>
            <div className="espacio"></div>
            <Phone>
              <div className="numero">
                <p>0</p>
              </div>
              <ComponenteInput
                    estado={codterciario}
                    cambiarEstado={cambiarCodigoAreaterciario}
                    type="text"
                    placeholder="Cod. Area"
                    name="codigoareaterciario"
                    id="codigoareaterciario"
                    leyendaError="Campo Obligatorio"
                    expresionRegular={expresiones.caracteristicaTelefono}
                />
              <div className="numero">
                <p>15</p>
              </div>
              <ComponenteInput
                    estado={celular}
                    cambiarEstado={cambiarCelular}
                    type="text"
                    placeholder="Celular"
                    name="celular"
                    id="celular"
                    leyendaError="Campo Obligatorio"
                    expresionRegular={expresiones.telefono}
                />
            </Phone>

            <div>
              <TextoFormu>ESCRIBÍ SOLO NUMEROS. NO AGREGUES GUIONES</TextoFormu>
            </div>

          </Columna1>

          <Columna2> 

            <div>
              <h3 className="texto-formu">DATOS DE LA TARJETA DE CRÉDITO</h3>
              <hr></hr>
            </div>
            

            <Dropdown
                    data={tarjetaData}
                    estado={tipotarjeta}
                    cambiarEstado={cambiarTipoTarjeta}
                    leyendaError="Campo Obligatorio"
                    name="tipotarjeta"
                    id="tipotarjeta"
              />
            
              <ComponenteInput
                  estado={numerotarjeta}
                  cambiarEstado={cambiarNumeroTarjeta}
                  type="text"
                  placeholder="Número de la tarjeta *"
                  name="numerotarjeta"
                  id="numerotarjeta"
                  leyendaError="Campo Obligatorio"
                  expresionRegular={expresiones.tarjetaCredito}
                  texto="ESCRIBÍ SOLO NUMEROS. NO AGREGUES GUIONES"
              />

              <div className="espacio"></div> 
              <p className="textos-formu">ES POSIBLE QUE ESTE CAMBIO SE VEA REFLEJADO A PARTIR DEL PRÓXIMO MES</p>
              
              
              <div>
                <p className="fechas-formu">FECHA DE VENCIMIENTO *:</p>

                <Fecha>
                  <Dropdown
                      data={mesData}
                      estado={mesvencimiento}
                      cambiarEstado={cambiarMesVencimiento}
                      leyendaError="Campo Obligatorio"
                      name="mes"
                      id="mes"
                    />
                  
                  <Dropdown
                      data={aniovencimientoData}
                      estado={aniovencimiento}
                      cambiarEstado={cambiarAnioVencimiento}
                      leyendaError="Campo Obligatorio"
                      name="anio"
                      id="anio"
                    />
                </Fecha>
            </div>

            <ComponenteInput
                estado={dniTC}
                cambiarEstado={cambiarDNITC}
                type="text"
                placeholder="DNI / CI /LE *"
                name="dni"
                id="dni"
                leyendaError="Campo Obligatorio"
                expresionRegular={expresiones.dni}
                texto="ESCRIBÍ SOLO NUMEROS. NO INCLUIR PUNTOS"
            />

            <div className="espacio"></div>

            <ComponenteInput
                estado={titularTC}
                cambiarEstado={cambiarTitularTC}
                type="text"
                placeholder="Titular de la Tarjeta *"
                name="titularTC"
                id="titularTC"
                leyendaError="Campo Obligatorio"
                expresionRegular={expresiones.titularTarjeta}
                texto="TAL Y COMO APARECE EN LA TARJETA DE CRÉDITO"
            />
            
            <div className="espacio"></div>

            <ComponenteInput
                estado={direccionpostal}
                cambiarEstado={cambiarDireccionPostal}
                type="text"
                placeholder="Dirección Postal"
                name="direccionpostal"
                id="direccionpostal"
                leyendaError="Campo Obligatorio"
                expresionRegular=""
                texto="COMPLETÁ ESTE CAMPO SOLO SI LA DIRECCIÓN DONDE RECIBÍS EL RESÚMEN DE LA TARJETA ES DIFERENTE DE LA QUE COMPLETASTE ANTERIORMENTE"
            />
            <div className="espacio"></div>
            <div className="espacio"></div>
            <hr></hr>
            <div className="mensajeAutorizacion">
              <p className="textos-formu">Si mi donación se encuentra inactiva, autorizo a debitarla nuevamente a través de este nuevo método de pago.</p>
            </div>
            {formularioValido === false && <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                <strong><b>Error:</b> </strong>Por favor rellene el formulario correctamente.
              </p>
            </MensajeError>}

            <ContenedorBotonCentrado>
              <Boton type="submit" >ENVIAR</Boton>
              {formularioValido === true && <MensajeExito>Formulario Enviado Exitosamente</MensajeExito>}
            </ContenedorBotonCentrado>
          </Columna2>


          {/*    
            {formularioValido === false && <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                <strong><b>Error:</b> </strong>Por favor rellene el formulario correctamente.
              </p>
            </MensajeError>}

            <ContenedorBotonCentrado>
              <Boton type="submit">ENVIAR</Boton>
              {formularioValido === true && <MensajeExito>Formulario Enviado Exitosamente</MensajeExito>}
            </ContenedorBotonCentrado>
            */}  
        </Formulario>
      </main>

      <CajaSocio >
        <div className="col-md-8">
          <p className="leyendasocio">Si ya sos socio:</p>
          <div>
            <div className="socioEstilo">
              <img src={mas} className="socioicono" alt="Suma más"/>
              <a className="redireccion" target="_blank" rel="noopener noreferrer" href="https://unite.greenpeace.org.ar/general/incrementar/index.php">Incrementá tu aporte</a>
            </div>
            <div className="socioEstilo">
              <img src={amigo} className="socioicono" alt="Suma amigos"/>
              <a className="redireccion" target="_blank" rel="noopener noreferrer" href="https://unite.greenpeace.org.ar/general/amigo/index.php">Asociá a un amigo</a>
            </div>
          </div> 
        </div>
      </CajaSocio>
      
      <footer className="footer">  
          <div className="politicas cajita">
            <a className="consulta" target="_blank" rel="noopener noreferrer" href="https://www.greenpeace.org/argentina/politica-privacidad/">Podés consultar aquí nuestra Política de Privacidad</a>
            <div className="cajita">
              <p>"El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326."</p>
              <p>"La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Organo de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales." </p>
            </div>    
          </div>
      </footer>
      <div className="espacio"></div>        

    </div>
  )
  
};
