import { useDispatch } from "react-redux";
import { openNewTask } from "../../actions/todos";
import "./NoTask.css";

function NoTask() {
  const dispatch = useDispatch();
  return (
    <div className="notask">
      <p className="notask__title">You have no task.</p>
      <button
        className="notask__button"
        onClick={() => dispatch(openNewTask())}
      >
        + New Task
      </button>
    </div>
  );
}

export default NoTask;
