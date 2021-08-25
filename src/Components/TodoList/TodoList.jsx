import "./TodoList.css";
function TodoList() {
  return (
    <div className="todolist">
      <div className="todolist__container">
        <div className="todolist__inputContainer">
          <input type="checkbox" className="todolist__checkbox" />
          <p className="todolist__task">Clean the room</p>
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
          />
        </div>
      </div>
      <div className="todolist__border"></div>
    </div>
  );
}

export default TodoList;
