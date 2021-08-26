import { useSelector } from "react-redux";
import TodoList from "../TodoList/TodoList";
import "./TodoContainer.css";

function TodoContainer() {
  const { tasks, isOpenNewTask } = useSelector((state) => state.tasks);

  return (
    <>
      <div className="todoContainer">
        {tasks?.data
          ?.map(({ task, _id }) => <TodoList task={task} id={_id} key={_id} />)
          .reverse()}
      </div>
    </>
  );
}

export default TodoContainer;
