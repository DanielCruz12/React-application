import Swal from "sweetalert2";

export const VisibilityControl = ({
  isChecked,
  setShowCompleted,
  showCompleted,
  cleanTasks,
}) => {
  const handleDelect = () => {
    if (
      Swal.fire({
        title: "¿Estás seguro de eliminar?",
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, bórralo!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Borrado!", "La tarea ha sido eliminada.", "success");
        }
      })
    ) {
      cleanTasks();
    }
  };
/*   const handleDelect = () => {
    if (
      Swal.fire({
        title: "¿Estás seguro de eliminar?",
        text: "No podrás revertir esto.!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, bórralo!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Eliminado!", "La tarea ha sido eliminada.", "success");
        }
      })
    ) {
      cleanTasks();
    }
  }; */

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
      <input
      className="form-check-input"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
        type="checkbox"
      ></input>
      </div>
      <label>Mostrar tareas completas</label>

      <button onClick={handleDelect} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};
