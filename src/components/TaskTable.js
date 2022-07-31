import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, ToggleTask, showCompleted = false }) => {
  const taskTableRow = (doneValue) => {
    return tasks
      .filter((tarea) => tarea.done === doneValue)
      .map((tarea) => (
        <TaskRow tarea={tarea} key={tarea.name} ToggleTask={ToggleTask} />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          {showCompleted === true && (
            <th>tareas realizadas</th>
          ) }
        </tr>
      </thead>
      <tbody>{taskTableRow(showCompleted)}</tbody>
    </table>
  );
};
