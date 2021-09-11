import React, { useContext, useState, useEffect } from "react";
import { faUserEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { obtenerMonitor } from "utils/monitores";
import { deleteMonitoria } from "utils/monitorias";

import InitialContext from "context/InitialContext";

const Monitoria = ({ monitoria }) => {
  const { setMonitorias, setEditar } = useContext(InitialContext);
  const { materia, monitor, fecha, salon } = monitoria;
  const [dataMonitor, setDataMonitor] = useState({ 1: "gg" });

  useEffect(() => {
    console.log("entra en el effect");
    obtenerMonitor(monitor, setDataMonitor);
  }, []);

  function convertDate(inputFormat) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  }

  /* Eliminar monitor */
  const onHandledDeleteMonitoria = () => {
    deleteMonitoria(monitoria.id, setMonitorias);
  };
  const onHandleEditMonitoria = () => {
    setEditar(monitoria);
  };

  return (
    <>
      <div className="custom-card">
        <div className="d-flex justify-content-between">
          <h4 className="text-capitalizer fz-18">Monitorias</h4>
          <div className="tm-icon-18">
            <FontAwesomeIcon
              icon={faUserEdit}
              className="tm-icon-16 mx-2"
              onClick={onHandleEditMonitoria}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="tm-icon-16 mx-2"
              onClick={onHandledDeleteMonitoria}
            />
          </div>
        </div>

        <hr />
        <p className="fz-16 text-capitalizer">
          <span>Materia: </span>
          {materia}
        </p>
        <p className="fz-16 text-capitalizer">
          <span>Monitor: </span>
          {/* {monitor} */}
          {dataMonitor.nombres + " " + dataMonitor.apellidos}
        </p>
        <p className="fz-16 text-capitalizer">
          <span>Fecha: </span>
          {convertDate(fecha)}
        </p>
        <p className="fz-16 text-capitalizer">
          <span>Salon: </span>
          {salon}
        </p>
      </div>
    </>
  );
};

export default Monitoria;
