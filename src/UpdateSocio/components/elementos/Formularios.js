import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d",
    success: "#3c763d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;  
    background: white;
    gap: 70px;
    width: 900px;

    @media (max-width: 800px) {
        gap: 30px;
        grid-template-columns: 1fr;
    }
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #f4f4f4;
    border-radius: 8px;
    height: 27px;
    line-height: 27px;
    padding: 0 30px 0 5px;
    transition: .3s ease all;
    border: 3px groove;
    border-styled: groove;
    border-width: 6px;
    border-color: #f4f4f4;
    
    
    margin: 0;
    padding: 0 20px;
    vertical-align: middle;
    background: #f8f8f8;
    border: 3px solid #ddd;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    ::placeholder {color: #888};
    -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
    -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
    -o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;

    


    &:focus{
        border: 3px solid ${colores.borde}
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid ${colores.success};
    `}

    ${props => props.valido === 'false' && css`
    border: 3px solid ${colores.error} !important;
    `}

`;

const Select = styled.select`
    width: 100%;
    background: #f4f4f4;
    border-radius: 8px;
    height: 27px;
    line-height: 27px;
    padding: 0 50px 0px 0px;
    transition: .3s ease all;
    border: 3px groove;
    border-styled: groove;
    border-width: 6px;
    border-color: #f4f4f4;
    text-align: left;
    


    margin: 0;
    padding: 0 20px;
    vertical-align: middle;
    background: #f8f8f8;
    border: 3px solid #ddd;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #888;
    -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
    -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
    -o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;
    
    &:focus{
        border: 3px solid ${colores.borde}
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    ${props => props.valido === 'true' && css`
    border: 3px solid ${colores.success};
    `}

    ${props => props.valido === 'false' && css`
    border: 3px solid ${colores.error} !important;
    
    `}
`

const Titulo = styled.div`
    display: flex;
    flex-direction: row;
    height: 260px;
    width: 1000px;;
    color: #00CB00;
    margin-top: 50px;
    font-weight: 500px;
    line-height: 30px;
    font-family: 'Paytone One', sans-serif;
    font-size: 32px;
    font-weight: normal;
    line-height: 30px;
    text-transform: uppercase;
    margin-top: 2%;
    margin-bottom: 1%;
    margin-left: 0%;
    text-align: center;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 10px;
        grid-template-columns: 1fr;
    }
`;



const Fecha = styled.div`
    gap: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 3%;
    

`;


const Prov = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;;
    width: 100%;
    
`;

const Provincia = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap : 50px;
    
`;

const Phone = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    gap: 30px;
`;

const Columna1 = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;
    
`;

const Columna2 = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;
    
`;

const Linea = styled.hr`
    width 90%;
    color: #888;
    padding-top: 0px;
    margin-top: 0px;
    margin-left: 0px;
    border: groove;
    
`


const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;

    ${props => props.valido === 'true' && css`
    display: none;
    `}
    
    ${props => props.valido === 'false' && css`
    display: block;
    background: #F66060;
    width: 20%;
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 8px;
    bottom: 7px;
    z-index: 1000;
    font-size: 18px;
    opacity: 0;

    ${props => props.valido === 'false' && css`
    opacity: 1;
    color: ${colores.error}
    `}

    ${props => props.valido === 'true' && css`
    opacity: 1;
    color: ${colores.exito}
    `}
`;

const IconoValidacionSelect = styled(FontAwesomeIcon)`
    position: absolute;
    right: 3px;
    bottom: 7px;
    z-index: 1000;
    font-size: 18px;
    opacity: 0;

    ${props => props.valido === 'false' && css`
    opacity: 1;
    color: ${colores.error}
    `}

    ${props => props.valido === 'true' && css`
    opacity: 1;
    color: ${colores.exito}
    `}
`;

const TextoFormu = styled.p`
    position: absolute;
    color: #757575 !important;
    font-size: 11px;
    

`

const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    @media (max-width: 880px){
        grid-column: span 1;


    }
    
`

const Boton = styled.button`
    text-shadow: none;
    height: 44px;
    line-height: 40px;
    width: 90%;
    background: #ffa200;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: .1s ease all;
    font-size: 23px;
    font-weight: 600px;
    font-family: 'Roboto', sans-serif;
    padding: 0 20px;
    border: 0;

    &:hover {
        box-shadow: 3px 2px 30px rgba(163,163,163,1);
    }
    
    @media (max-width: 880px){
        grid-column: span 1;

        
    }

`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    
`

const MensajeError = styled.div`
    height: 45px;
    display: inline
    line-height: 45px;
    background: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    p {
        margin: 0;
    }
    b{
        margin-left: 15px;
    }
`

const CajaSocio = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 200px;
    padding-top: 2.5%;
    margin-bottom: 3%;
    color: white;

`
const CajaImagen = styled.img`
    max-width: auto;
    max-height: auto;
    background: cover;
`

export {
    Formulario,
    colores,
    GrupoInput, 
    Input, 
    LeyendaError, 
    IconoValidacion,
    IconoValidacionSelect, 
    ContenedorBotonCentrado, 
    Boton,
    MensajeExito,
    MensajeError,
    Select,
    Fecha,
    Prov,
    Provincia,
    Phone,
    Columna1,
    Columna2,
    Linea,
    Titulo,
    CajaSocio,
    TextoFormu,
    CajaImagen    
};