import { combineReducers } from "redux";
import tasks from "./todos";
import auth from "./auth";

export default combineReducers({
  tasks,
  auth,
});
