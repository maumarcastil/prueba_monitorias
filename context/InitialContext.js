import React, { createContext, useEffect, useState } from "react";
import { listarMonitores } from "utils/monitores";
import { listarMonitorias } from "utils/monitorias";

const InitialContext = createContext();

export const InitialProvider = ({ children }) => {
  const [monitores, setMonitores] = useState([]);
  const [monitorias, setMonitorias] = useState([]);
  const [editar, setEditar] = useState(false);

  /* carga los monitores y las monitorias en los state */
  useEffect(() => {
    listarMonitores(setMonitores);
    listarMonitorias(setMonitorias);
  }, []);

  const data = {
    monitores,
    editar,
    monitorias,
    setMonitores,
    setMonitorias,
    setEditar,
  };
  return (
    <>
      <InitialContext.Provider value={data}>{children}</InitialContext.Provider>
    </>
  );
};

export default InitialContext;
