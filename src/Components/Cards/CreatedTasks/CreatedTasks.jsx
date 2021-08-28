import { useSelector } from "react-redux";
import "./CreatedTasks.css";

function CreatedTasks() {
  const { tasks, isOpenNewTask } = useSelector((state) => state.tasks);

  return (
    <div className="createdtasks">
      <label className="createdtasks_title">Latest Created Tasks</label>
      <div className="createdtasks__contianer">
        <ul reversed className="createdtasks_list">
          {tasks
            ?.map(({ task, _id }) => (
              <li task={task} key={_id}>
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
