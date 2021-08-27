import * as api from "../api";
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_DASHBOARD,
  FETCH_TASKS,
  START_LOADING,
  END_LOADING,
  NEW_TASK,
  NEW_TASK_CLOSE,
} from "../constants/actionTypes";

export const getDashboard = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchDashboard();

    dispatch({ type: FETCH_DASHBOARD, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchTasks();

    dispatch({ type: FETCH_TASKS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (task, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createTask(task);

    dispatch({ type: CREATE, payload: data });
    // dispatch(getDashboard());
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, task) => async (dispatch) => {
  try {
    const { data } = await api.updateTask(id, task);
    // dispatch(getDashboard());
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTask(id);

    dispatch({ type: DELETE, payload: id });
    // dispatch(getDashboard());
  } catch (error) {
    console.log(error);
  }
};

export const openNewTask = () => async (dispatch) => {
  try {
    dispatch({ type: NEW_TASK });
  } catch (error) {
    console.log(error);
  }
};

export const closeNewTask = () => async (dispatch) => {
  try {
    dispatch({ type: NEW_TASK_CLOSE });
  } catch (error) {
    console.log(error);
  }
};
