import { useSelector } from "react-redux";
import "./CustomCard.css";

function CustomCard() {
  const { tasks } = useSelector((state) => state.tasks);
  const completed = tasks?.filter(({ completed, task }) => {
    if (completed === true) return task;
  });

  return (
    <div className="customcard">
      <label className="customcard_title">Task Completed</label>
      <div className="customcard__taskCount">
        <h1 className="customcard__available">{completed?.length}</h1>
        <p className="customcard__total">/ {tasks?.length}</p>
      </div>
    </div>
  );
}

export default CustomCard;
