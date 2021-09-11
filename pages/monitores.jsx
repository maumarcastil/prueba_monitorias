import React, { useContext } from "react";
import InitialContext from "context/InitialContext";

//imports components
import Sidebar from "components/layout/Sidebar";
import Monitor from "components/monitores/Monitor";

const Monitores = () => {
  const { monitores, setMonitores } = useContext(InitialContext);

  return (
    <>
      <div className="contenedor-app">
        <Sidebar type="monitores" />

        <div className="w-100">
          <div className="container h-100">
            <h2 className="pt-5">Listado monitores</h2>
            <div className="scroll">
              <div className="listado ">
                {monitores.map((monitor) => (
                  <Monitor key={monitor.id} monitor={monitor} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monitores;
