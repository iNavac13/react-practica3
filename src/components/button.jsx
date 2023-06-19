import React from "react";
import '../stylesheets/button.css';


function Button(props) {

  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  };

  return (
    <button className={`boton-contenedor ${ esOperador(props.children) ? 'operador' : '' }`.trimEnd()}
    onClick={()=>props.manejarClick(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Button;