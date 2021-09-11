import React, { useEffect, useState, useContext } from "react";
import Error from "components/layout/Error";
import InitialContext from "context/InitialContext";

import { addMonitor } from "utils/monitores";
import { addMonitoria } from "utils/monitorias";

const FormMonitorias = () => {


  
  const { monitores, monitorias, setMonitores, setMonitorias } =
    useContext(InitialContext);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    materia: "",
    monitor: "",
    fecha: "",
    salon: "",
  });
  const { materia, monitor, fecha, salon } = data;

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
      materia: "",
      monitor: "",
      fecha: "",
      salon: "",
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    //validando que no esten vacios
    if (!materia.trim() || !monitor || !fecha.trim() || !salon.trim()) {
      setError(true);
      return;
    }
    setError(false);

    //enviar data
    addMonitoria(data, setMonitorias);
    onHandleClick();
  };

  return (
    <>
      <h1>Agregar monitorias</h1>
      <form onSubmit={onHandleSubmit}>
        {error ? <Error mensaje="Todos los campos son requeridos" /> : null}

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="materiaInput"
            placeholder="Materia"
            name="materia"
            value={materia}
            onChange={(e) => onHandleChange(e, true)}
          />
          <label htmlFor="materiaInput">Materia</label>
        </div>

        <div className="form-floating mb-3">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              name="monitor"
              value={monitor}
              onChange={(e) => onHandleChange(e)}
            >
              <option selected>Seleccione una opcion</option>
              {monitores.map((monitor) => (
                <option value={monitor.id} key={monitor.id}>
                  {monitor.nombres + " " + monitor.apellidos}
                </option>
              ))}
            </select>
            <label htmlFor="floatingSelect">Monitor</label>
          </div>
        </div>

        <div className="form-floating mb-3">
          <input
            type="date"
            id="programaInput"
            className="form-control"
            name="fecha"
            value={fecha}
            onChange={(e) => onHandleChange(e)}
            placeholder="Fecha"
          />
          <label htmlFor="programaInput">Fecha</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            id="cedulaInput"
            placeholder="Salon"
            className="form-control"
            name="salon"
            value={salon}
            onChange={(e) => onHandleChange(e)}
          />
          <label htmlFor="cedulaInput">Salon</label>
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

export default FormMonitorias;
