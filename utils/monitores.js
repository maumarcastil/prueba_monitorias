import axios from "axios";
import Swal from "sweetalert2";

const ruta = "http://localhost:9000/api/monitores";

export const listarMonitores = async (setMonitores) => {
  await axios
    .get(ruta)
    .then((res) => {
      console.log(res.data.message);
      setMonitores(res.data.message);
    })
    .catch((e) => {
      console.log(e.message);
    });
};

export const obtenerMonitor = async (id, setDataMonitor) => {
  await axios
    .get(ruta + `/get?id=${id}`)
    .then((res) => {
      setDataMonitor(res.data.message[0]);
    })
    .catch((e) => {
      console.log(e.message);
    });
};

export const addMonitor = async (data, setMonitores) => {
  await axios
    .post(ruta + "/add", data)
    .then((res) => {
      listarMonitores(setMonitores);
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

export const deleteMonitor = async (id, setMonitores) => {
  await axios
    .post(ruta + "/delete", { id: id })
    .then((res) => {
      /*       console.log(res);*/
      listarMonitores(setMonitores);
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

export const updateMonitor = async (data, setMonitores) => {
  await axios
    .post(ruta + "/update", data)
    .then((res) => {
      console.log(res);
      listarMonitores(setMonitores);
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
