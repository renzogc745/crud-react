import React, { useState, useEffect } from 'react';

const initialForm ={
    id: null,
    name:"",
    url: "",
}

export default function () {
const [form, setForm] = useState(initialForm);

  //Funciones de eventos
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};

  return (
    <>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ingrese nombre: </label>
        <input type="text" id="name" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
        <br />
        <br />
        <label htmlFor="url">Ingrese URL: </label>
        <input type="url" id="url" name="url" placeholder="URL" onChange={handleChange} value={form.url}/>
        <br />
        <br />
        <input type="submit" />
        <input type="reset" onClick={handleReset}/>
      </form>
    </>
  );
}
