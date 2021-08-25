import "./NewTask.css";

function NewTask() {
  return (
    <div className="newtask">
      <p className="newtask__title">+ New Task</p>
      <input className="newtask__input" type="text" placeholder="Task Name" />
      <button className="newtask__button">+ New Task</button>
    </div>
  );
}

export default NewTask;
