export const VisibilityControl = ({ isChecked ,setShowCompleted, showCompleted, cleanTasks }) => {
 
    const handleDelect = () => {
    if(window.confirm('are you sure?')){
        cleanTasks();
    }
  };

  return (
    <div>
      <input
      checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
        type="checkbox"
      ></input>
      <label>Mostrar tareas completas</label>
      <button onClick={handleDelect}>Delete</button>
    </div>
  );
};
