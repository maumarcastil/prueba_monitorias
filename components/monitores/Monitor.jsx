import React, { useContext, useEffect } from "react";
import { faUserEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InitialContext from "context/InitialContext";
import { deleteMonitor } from "utils/monitores";

const Monitor = ({ monitor }) => {
  const { setMonitores, setEditar } = useContext(InitialContext);

  /* Eliminar monitor */
  const onHandledDeleteMonitor = () => {
    deleteMonitor(monitor.id, setMonitores);
  };

  const onHandleEditMonitor = () => {
    setEditar(monitor);
  };

  return (
    <>
      <div className="custom-card">
        <div className="d-flex justify-content-between">
          <h4 className="text-capitalizer fz-18">Monitor</h4>
          <div className="tm-icon-18">
            <FontAwesomeIcon
              icon={faUserEdit}
              className="tm-icon-16 mx-2"
              onClick={onHandleEditMonitor}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="tm-icon-16 mx-2"
              onClick={onHandledDeleteMonitor}
            />
          </div>
        </div>

        <hr />
        <p className="fz-16 text-capitalizer">
          <span>Nombres: </span>
          {monitor.nombres}
        </p>
        <p className="fz-16 text-capitalizer">
          <span>Apellidos: </span>
          {monitor.apellidos}
        </p>
        <p className="fz-16 text-capitalizer">
          <span>Programa: </span>
          {monitor.programa}
        </p>
        <p className="fz-16 text-capitalizer">
          <span>Semestre: </span>
          {monitor.semestre}
        </p>
        <p className="fz-16 text-capitalizer">
          <span>Cedula: </span>
          {monitor.cedula}
        </p>
        <p className="fz-16 text-capitalizer">
          <span>Celular: </span>
          {monitor.telefono}
        </p>
      </div>
    </>
  );
};

export default Monitor;
