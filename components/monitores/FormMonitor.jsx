import React, { useEffect, useState, useContext } from "react";

import Error from "components/layout/Error";
import { addMonitor } from "utils/monitores";
import InitialContext from "context/InitialContext";

const FormMonitor = () => {
  const { setMonitores } = useContext(InitialContext);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    nombres: "",
    apellidos: "",
    programa: "",
    semestre: "",
    cedula: "",
    telefono: "",
  });
  const { nombres, apellidos, programa, semestre, cedula, telefono } = data;

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);

  const onHandleChange = (e, strict = false) => {
    if (strict) {
      if (
        e.target.type === "text" &&
        (/^[a-z][a-z\s]*$/.test(e.target.value) || e.target.value === "")
      ) {
        let val = e.target.value;
        //val = val.replace(/[^A-Za-z]/gi, "");
        setData({
          ...data,
          [e.target.name]: val,
        });
        return;
      }

      if (
        (e.target.type === "number" || e.target.type === "tel") &&
        (/^[0-9\b]+$/.test(e.target.value) || e.target.value === "")
      ) {
        let val = e.target.value;
        //val = val.replace(/[^A-Za-z]/gi, "");
        setData({
          ...data,
          [e.target.name]: val.trim(),
        });
        return;
      }
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value.trim(),
      });
    }
  };

  //Limpiar campos
  const onHandleClick = () => {
    setData({
      nombres: "",
      apellidos: "",
      programa: "",
      semestre: "",
      cedula: "",
      telefono: "",
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    //validando que no esten vacios
    if (
      !nombres.trim() ||
      !apellidos.trim() ||
      !programa.trim() ||
      !semestre ||
      !cedula ||
      !telefono
    ) {
      setError(true);
      return;
    }
    setError(false);

    //enviar data
    addMonitor(data, setMonitores);
    onHandleClick();
  };

  return (
    <>
      <h1>Agregar monitor</h1>
      <form onSubmit={onHandleSubmit}>
        {error ? <Error mensaje="Todos los campos son requeridos" /> : null}

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="nombresInput"
            placeholder="Nombres"
            name="nombres"
            value={nombres}
            onChange={(e) => onHandleChange(e, true)}
          />
          <label htmlFor="nombresInput">Nombres</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            id="apellidosInput"
            className="form-control"
            placeholder="Apellidos"
            name="apellidos"
            value={apellidos}
            onChange={(e) => onHandleChange(e, true)}
          />
          <label htmlFor="apellidosInput">Apellidos</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            id="programaInput"
            className="form-control"
            name="programa"
            value={programa}
            onChange={(e) => onHandleChange(e, true)}
            placeholder="Programa academico"
          />
          <label htmlFor="programaInput">Programa academico</label>
        </div>

        <div className="form-floating mb-3">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              name="semestre"
              value={semestre}
              onChange={(e) => onHandleChange(e)}
            >
              <option selected>Seleccione una opcion</option>
              <option value="1">Primero</option>
              <option value="2">Segundo</option>
              <option value="3">Tercero</option>
              <option value="4">Cuarto</option>
              <option value="5">Quinto</option>
              <option value="6">Sexto</option>
              <option value="7">Septimo</option>
              <option value="8">Octavo</option>
              <option value="9">Noveno</option>
              <option value="10">Decimo</option>
            </select>
            <label htmlFor="floatingSelect">Semestre</label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            id="cedulaInput"
            placeholder="Cedula"
            className="form-control"
            name="cedula"
            value={cedula}
            onChange={(e) => onHandleChange(e, true)}
          />
          <label htmlFor="cedulaInput">Cedula</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="tel"
            id="telInput"
            placeholder="Telefono"
            className="form-control"
            maxLength="10"
            name="telefono"
            value={telefono}
            onChange={(e) => onHandleChange(e, true)}
          />
          <label htmlFor="telInput">Telefono</label>
        </div>

        <div className="d-flex flex-column flex-sm-row">
          <button
            type="button"
            className="btn btn-primary me-sm-2 mb-3 mb-sm-0 w-100"
            onClick={onHandleClick}
          >
            Limpiar
          </button>

          <button
            type="submit"
            className="btn btn-primary ms-sm-2 mb-3 mb-sm-0 w-100"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormMonitor;
