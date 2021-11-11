import React from "react";
import CrudAppForm from "./CrudAppForm";

// Base de Datos
const frameworksDB = [
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
  return (
    <div>
        {/* Título */}
      <h2>Tecnologías JS</h2>
      {/* Formulario para capturar datos */}
      <CrudAppForm/>
      {/* Resultados en tabla */}
      <table></table>
    </div>
  );
}
