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
  OPEN_MODAL,
  CLOSE_MODAL,
  EDIT_MODAL,
} from "../constants/actionTypes";

export default (
  state = {
    isLoading: true,
    tasks: [],
    isOpenNewTask: false,
    isModal: false,
    edit: false,
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };

    case END_LOADING:
      return { ...state, isLoading: false };

    case FETCH_DASHBOARD:
      return {
        ...state,
        tasks: action.payload.data,
      };

    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    case CREATE:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case UPDATE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };

    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };

    case NEW_TASK:
      return { ...state, isOpenNewTask: true };

    case NEW_TASK_CLOSE:
      return { ...state, isOpenNewTask: false };

    case OPEN_MODAL:
      return {
        ...state,
        isModal: true,
      };

    case EDIT_MODAL:
      return {
        ...state,
        isModal: true,
        task: action.payload.task,
        id: action.payload.id,
        edit: true,
      };

    case CLOSE_MODAL:
      return { ...state, isModal: false, edit: false };

    default:
      return state;
  }
};
