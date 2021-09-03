import "./NewTask.css";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  closeNewTask,
  createTask,
  updateTask,
} from "../../../actions/todos";
import { useRef, useState } from "react";

function NewTask() {
  const dispatch = useDispatch();
  const inpref = useRef();

  const user = JSON.parse(localStorage.getItem("profile"));
  const { task, id, edit } = useSelector((state) => state.tasks);

  const [editTask, setEditTask] = useState(task);

  const [postData, setPostData] = useState({
    task: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!edit)
      dispatch(
        createTask({
          ...postData,
          completed: false,
          userId: user?.result?.userId,
        })
      );
    else
      dispatch(
        updateTask(id, {
          ...postData,
          task: editTask,
        })
      );

    dispatch(closeNewTask());
    dispatch(closeModal());
  };

  const close = (e) => {
    if (e.target.className === "newtask__modal") {
      dispatch(closeModal());
      dispatch(closeNewTask());
    }
  };

  return (
    <div className="newtask__modal" onClick={close}>
      <div className="newtask">
        <p className="newtask__title">{!edit ? "+ New Task" : "Edit Task"}</p>
        <form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          className="newtask__form"
        >
          <input
            ref={inpref}
            maxLength="40"
            className="newtask__input"
            type="text"
            placeholder="Task Name"
            value={!edit ? postData.task : editTask}
            onChange={(e) =>
              !edit
                ? setPostData({ ...postData, task: e.target.value })
                : setEditTask(e.target.value)
            }
          />
          <button
            type="submit"
            className="newtask__button"
            disabled={!edit ? !postData.task : !editTask}
          >
            {!edit ? "+ New Task" : "Edit Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTask;
