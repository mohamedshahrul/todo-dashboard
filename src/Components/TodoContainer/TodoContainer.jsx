import { useSelector } from "react-redux";
import TodoList from "./TodoList/TodoList";
import "./TodoContainer.css";

function TodoContainer() {
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <>
      <div className="todoContainer">
        {tasks
          ?.map(({ task, completed, _id }) => (
            <TodoList task={task} id={_id} key={_id} completed={completed} />
          ))
          .reverse()}
      </div>
    </>
  );
}

export default TodoContainer;
