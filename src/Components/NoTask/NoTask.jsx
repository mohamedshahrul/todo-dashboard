import "./NoTask.css";

function NoTask() {
  return (
    <div className="notask">
      <p className="notask__title">You have no task.</p>
      <button className="notask__button">+ New Task</button>
    </div>
  );
}

export default NoTask;
