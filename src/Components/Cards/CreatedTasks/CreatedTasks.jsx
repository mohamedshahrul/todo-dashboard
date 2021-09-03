import { useSelector } from "react-redux";
import "./CreatedTasks.css";

function CreatedTasks() {
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <div className="createdtasks">
      <label className="createdtasks_title">Latest Created Tasks</label>
      <div className="createdtasks__contianer">
        <ul reversed className="createdtasks_list">
          {tasks
            ?.map(({ task, _id, completed }) => (
              <li
                task={task}
                key={_id}
                className={completed ? "createdtasks__checked" : ""}
              >
                {task}
              </li>
            ))
            .reverse()}
        </ul>
      </div>
    </div>
  );
}

export default CreatedTasks;
