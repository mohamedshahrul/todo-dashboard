import { useDispatch } from "react-redux";
import { deleteTask } from "../../actions/todos";
import "./TodoList.css";

function TodoList({ task, id }) {
  const dispatch = useDispatch();

  return (
    <div className="todolist">
      <div className="todolist__container">
        <div className="todolist__inputContainer">
          <input type="checkbox" className="todolist__checkbox" />
          <p className="todolist__task">{task}</p>
        </div>
        <div className="todolist__iconContainer">
          <img
            src="image/pen-solid.png"
            alt="Edit"
            className="todolist__edit"
          />
          <img
            src="image/trash-solid.png"
            alt="Delete"
            className="todolist__delete"
            onClick={() => dispatch(deleteTask(id))}
          />
        </div>
      </div>
      <div className="todolist__border"></div>
    </div>
  );
}

export default TodoList;
