import "./UtilityBar.css";

function UtilityBar() {
  return (
    <div className="utilitybar">
      <div>
        <label className="utilitybar__title">Tasks</label>
      </div>
      <div className="utilitybar__right">
        <div className="utilitybar__searchContainer">
          <img src="image/search-solid.png" className="utilitybar__icon" />
          <input
            type="text"
            placeholder="Search by Task name"
            className="utilitybar__input"
          />
        </div>
        <button className="utilitybar__button">+ New Task</button>
      </div>
    </div>
  );
}

export default UtilityBar;
