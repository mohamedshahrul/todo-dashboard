import TodoList from "../TodoList/TodoList";
import "./TodoContainer.css";

function TodoContainer() {
  return (
    <>
      <div className="todoContainer">
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
      </div>
    </>
  );
}

export default TodoContainer;
