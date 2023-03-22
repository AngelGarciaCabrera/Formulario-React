import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Formulario } from './Components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListadoContactos } from './Components/ListadoContactos';
import OptenerContactos from './Components/Utilidades/Utilidades';

function App() {
  const [Dato, setDatos] = useState([])
  async function  GetDatos () {
    
    const Resultado = await OptenerContactos()
    
    setDatos(Resultado)

  }
  return (

    <div className="App">

      <Formulario Refresh={GetDatos} />

      <br></br>
      <br></br>
      <br></br>

      <ListadoContactos Datos={Dato} />
    </div>
  );

}

export default App;
