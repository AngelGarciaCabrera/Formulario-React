import React from 'react'

import {useState, useEffect} from 'react';
import OptenerContactos from './Utilidades/Utilidades';


export const ListadoContactos = (props) => {
    const {Datos} = props
    
  return (<>
    <h1 className="card-header container border  bg-info">Contactos </h1>
      <center>
      <h1>Total: {Datos.length} </h1>
      <div className="container table-wrapper-scroll-y my-custom-scrollbar">
        

        <table  className='table table-bordered  table-striped mb-0 '>
          <thead>
          <tr>
              <td scope="col">Nombres</td>
              <td scope="col" >Apellidos</td>
              <td scope="col">Telefonos</td>
          </tr>
          </thead>
          <tbody>
        {
        Datos.map((dato,index) =>{
          return(
            <tr key={index}>
            <td  name="nombre">{dato.nombre}</td>
            <td name="apellido">{dato.apellido}</td>
            <td name="telefono">{dato.telefono}</td>
        </tr>
  
          )
        })
        }
        </tbody>
        </table>
  
     
    </div>
    </center>
  </>
    
   
  )
}
export default ListadoContactos