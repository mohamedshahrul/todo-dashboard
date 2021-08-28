import "./UtilityBar.css";
import { useDispatch } from "react-redux";
import { getPostsBySearch, openModal } from "../../../actions/todos";
import { useState } from "react";

function UtilityBar() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      dispatch(getPostsBySearch({ searchInput }));
    }
  };

  return (
    <div className="utilitybar">
      <div>
        <label className="utilitybar__title">Tasks</label>
      </div>
      <div className="utilitybar__right">
        <form className="utilitybar__searchContainer" onSubmit={search}>
          <img src="image/search-solid.png" className="utilitybar__icon" />
          <input
            value={searchInput}
            type="text"
            placeholder="Search by Task name"
            className="utilitybar__input"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <input type="submit" hidden />
        </form>
        <button
          className="utilitybar__button"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          + New Task
        </button>
      </div>
    </div>
  );
}

export default UtilityBar;
