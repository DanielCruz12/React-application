export const TaskRow = ({ tarea, ToggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {tarea.name}
        <input
          type="checkbox"
          checked={tarea.done}
          onChange={() => ToggleTask(tarea)}
        ></input>
      </td>
    </tr>
  );
};
