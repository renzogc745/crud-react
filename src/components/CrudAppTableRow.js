import React from "react";
import CrudAppTable from "./CurdAppTable";

export default function CrudAppTableRow(props) {
  return (
    <>
      <tr>
        <td>{props.element.name}</td>
        <td>{props.element.url}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
}
