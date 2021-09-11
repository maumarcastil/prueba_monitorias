import React, { useContext } from "react";

/* Monitores */
import FormMonitor from "components/monitores/FormMonitor";
import FormEditarMonitor from "components/monitores/FormEditarMonitor";
/* monitorias */
import FormMonitorias from "components/monitorias/FormMonitorias";
import FormEditarMonitorias from "components/monitorias/FormEditarMonitorias";

import InitialContext from "context/InitialContext";

const Sidebar = ({ type }) => {
  const { editar } = useContext(InitialContext);

  return (
    <>
      <aside>
        {type === "monitores" ? (
          editar ? (
            <FormEditarMonitor />
          ) : (
            <FormMonitor />
          )
        ) : null}
        {type === "monitorias" ? (
          editar ? (
            <FormEditarMonitorias />
          ) : (
            <FormMonitorias />
          )
        ) : null}
      </aside>
    </>
  );
};

export default Sidebar;
