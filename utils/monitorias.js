import axios from "axios";
import Swal from "sweetalert2";

const ruta = "http://localhost:9000/api/monitorias";

export const listarMonitorias = async (setMonitorias) => {
  await axios
    .get(ruta)
    .then((res) => {
      setMonitorias(res.data.message);
    })
    .catch((e) => {
      console.log(e.message);
    });
};

export const addMonitoria = async (data, setMonitorias) => {
  await axios
    .post(ruta + "/add", data)
    .then((res) => {
      listarMonitorias(setMonitorias);
      Swal.fire({
        title: "success!",
        text: "Agregado exitosamente!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    })
    .catch((e) => {
      console.log(e.message);

      Swal.fire({
        title: "error!",
        text: "No se pudo agregar!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    });
};

export const deleteMonitoria = async (id, setMonitorias) => {
  await axios
    .post(ruta + "/delete", { id: id })
    .then((res) => {
      /*       console.log(res);*/
      listarMonitorias(setMonitorias);
      Swal.fire({
        title: "success!",
        text: "Eliminado!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    })
    .catch((e) => {
      console.log(e.message);
      Swal.fire({
        title: "error!",
        text: "No se pudo eliminar!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    });
};

export const updateMonitoria = async (data, setMonitorias) => {
  await axios
    .post(ruta + "/update", data)
    .then((res) => {
      console.log(res);
      listarMonitorias(setMonitorias);
      Swal.fire({
        title: "success!",
        text: "Editado exitosamente!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    })
    .catch((e) => {
      console.log(e.message);
      Swal.fire({
        title: "error!",
        text: "No se pudo editar!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    });
};
