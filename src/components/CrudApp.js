import React, { useState } from 'react';
import CrudAppForm from "./CrudAppForm";
import CrudAppTable from "./CurdAppTable";

// Base de Datos
const initialDb = [
  {
    id: 1,
    name: "Angular",
    url: "https://angular.io",
  },
  {
    id: 2,
    name: "React",
    url: "https://es.reactjs.org/",
  },
  {
    id: 3,
    name: "Vue",
    url: "https://vuejs.org/",
  }
];

export default function () {
    const [db, setDb] = useState(initialDb);
    
    console.log(initialDb)
  return (
    <>
        {/* Título */}
      <h2>Tecnologías JS</h2>
      {/* Formulario para capturar datos */}
      <CrudAppForm/>
      {/* Resultados en tabla */}
      <CrudAppTable data={initialDb}/>
    </>
  );
}
