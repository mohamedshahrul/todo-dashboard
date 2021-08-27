import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  closeNewTask,
  deleteTask,
  getDashboard,
  openEdit,
  openModal,
  updateTask,
} from "../../actions/todos";

import "./TodoList.css";

function TodoList({ task, id, completed }) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(completed);

  return (
    <div className="todolist">
      <div className="todolist__container">
        <div className="todolist__inputContainer">
          <input
            defaultChecked={isChecked}
            type="checkbox"
            className="todolist__checkbox"
            onChange={() => {
              setIsChecked((isChecked) => !isChecked);
              dispatch(
                updateTask(id, {
                  ...task,
                  completed: !isChecked,
                })
              );
            }}
          />
          <p className={`todolist__task ${isChecked && "todolist__checked"}`}>
            {task}
          </p>
        </div>
        <div className="todolist__iconContainer">
          <img
            src="image/pen-solid.png"
            alt="Edit"
            className="todolist__edit"
            onClick={() => {
              dispatch(openEdit(task, id));
            }}
          />
          <img
            src="image/trash-solid.png"
            alt="Delete"
            className="todolist__delete"
            onClick={() => {
              dispatch(deleteTask(id));
            }}
          />
        </div>
      </div>
      <div className="todolist__border"></div>
    </div>
  );
}

export default TodoList;
