import React, { useState } from "react";
import { Card } from "./Card";


export default function Formulario (){
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("");
  const [showInformation, setShowInformation] = useState(false);

  const cambiarNombre = (e) => {
    setName(e.target.value);
  };
  const cambiarApellido = (e) => {
    setLastname(e.target.value);
  };
  const cambiarNumero = (e) => {
    setNumber(e.target.value)
  };
  const cambiarEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInformation(true);
    
  
    /*console.log("formulario enviado");*/
  };
  return (
    <div className="contenedor-principal">
      <h2>FORMULARIO DE INSCRIPCIÓN</h2>
      <form className="form" onSubmit={handleSubmit} >
        <label>
          Nombre: 
          <input type="text" value={name} onChange={cambiarNombre} required placeholder="Escribe tu nombre" />
        </label>
        <label>
          Apellido: 
          <input type="text" value={lastname} onChange={cambiarApellido} required placeholder="Escribe tu apellido" />
        </label>
        <label>
          Número: 
          <input type="tel"  value={number} onChange={cambiarNumero} pattern= "[0-9]{12}" placeholder="Escribe tu number"/>
        </label>
        <label>
          E-mail: 
          <input type="email" value={email} onChange={cambiarEmail} required placeholder="Escribe tu correo"/>
        </label>
        <button className="boton">Enviar formulario</button>
      </form>
      {showInformation === true ? <Card name={name} lastname={lastname} number={number} email={email}/> : "Debe llenar completamente el formulario" }
      
     
    </div>
  );
}
