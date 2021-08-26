import "./NewTask.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { closeNewTask, createTask } from "../../actions/todos";
import { useState } from "react";

function NewTask() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("profile"));

  const [postData, setPostData] = useState({
    task: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createTask(
        { ...postData, completed: false, userId: user?.result?.userId },
        history
      )
    );
    dispatch(closeNewTask());
  };

  return (
    <div className="newtask">
      <p className="newtask__title">+ New Task</p>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className="newtask__form"
      >
        <input
          maxLength="40"
          className="newtask__input"
          type="text"
          placeholder="Task Name"
          value={postData.task}
          onChange={(e) => setPostData({ ...postData, task: e.target.value })}
        />
        <button type="submit" className="newtask__button">
          + New Task
        </button>
      </form>
    </div>
  );
}

export default NewTask;
