import "./CreatedTasks.css";

function CreatedTasks() {
  return (
    <div className="createdtasks">
      <label className="createdtasks_title">Latest Created Tasks</label>
      <ul className="createdtasks_list">
        <li>Clean the room</li>
        <li>Buy Some vegetables, chicken..</li>
        <li>Reinstall windows on PC</li>
      </ul>
    </div>
  );
}

export default CreatedTasks;
