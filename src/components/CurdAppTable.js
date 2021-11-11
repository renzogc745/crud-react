import React from "react";
import CrudAppTableRow from "./CrudAppTableRow";

export default function CrudAppTable(props) {
  return (
    <>
      <table>
        <caption>Resultados</caption>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>URL</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.data.table === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            props.data.map((el) => 
              <CrudAppTableRow key={el.id} element={el}/>
            )
          )}
        </tbody>
      </table>
    </>
  );
}
