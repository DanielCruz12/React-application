import { useState } from "react";
import Swal from "sweetalert";

export const TasksCreator = ({ crearTareas }) => {
  const [nuevoNombreTarea, setNuevoNombreTarea] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoNombreTarea.trim().length > 0) {
      crearTareas(nuevoNombreTarea);
      Swal("Good job!", "Tarea agregada", "success");
      setNuevoNombreTarea("");
    } else {
      Swal("Oops", "Por favor llena todos los campos", "error");
      setNuevoNombreTarea("");
    }
    //localStorage.setItem("task", nuevoNombreTarea);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
            type="text"
            placeholder="añadir una tarea"
            value={nuevoNombreTarea}
            onChange={(e) => setNuevoNombreTarea(e.target.value)}
            className="form-control"
          ></input>
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary btn-sm">
            Añadir
          </button>
        </div>
      </form>
    </>
  );
};
