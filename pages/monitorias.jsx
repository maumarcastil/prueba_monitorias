import React, { useContext } from "react";
import InitialContext from "context/InitialContext";

//imports components
import Sidebar from "components/layout/Sidebar";
import Monitoria from "components/monitorias/monitoria";

const Monitorias = () => {
  const { monitorias, setMonitorias } = useContext(InitialContext);

  return (
    <>
      <div className="contenedor-app">
        <Sidebar type="monitorias" />

        <div className="w-100">
          <div className="container h-100">
            <h2 className="pt-5">Listado monitorias</h2>
            <div className="scroll">
              <div className="listado ">
                {monitorias.map((monitoria) => (
                  <Monitoria key={monitoria.id} monitoria={monitoria} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monitorias;
